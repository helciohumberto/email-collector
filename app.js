const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const API_KEY = '';
const CX = '';

async function searchGoogle(query) {
  const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${API_KEY}&cx=${CX}`;
  
  try {
    const response = await axios.get(url);
    return response.data.items; 
  } catch (error) {
    console.error("Erro ao buscar no Google:", error);
    return [];
  }
}

async function collectEmailsFromUrl(url) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
  
      const emails = [];
      
      $('a').each((i, el) => {
        const href = $(el).attr('href');
        if (href && href.startsWith('mailto:')) {
          const email = href.replace('mailto:', '');
          emails.push(email);
        }
      });
  
      const pageText = $('body').text();
      const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
      const foundEmails = pageText.match(emailRegex);
      if (foundEmails) {
        emails.push(...foundEmails);
      }
  
      return emails;
    } catch (error) {
      console.error(`Erro ao acessar a URL ${url}:`, error);
      return [];
    }
  }
  

async function findParoquiasAndEmails() {
  const query = 'paroquias Sul de Minas Gerais email'; 
  const searchResults = await searchGoogle(query);

  let allEmails = [];
  
  for (let item of searchResults) {
    const url = item.link;
    console.log(`Coletando e-mails de: ${url}`);

    const emails = await collectEmailsFromUrl(url);
    if (emails.length > 0) {
      console.log(`E-mails encontrados em ${url}:`, emails);
      allEmails = allEmails.concat(emails);
    }
  }

  if (allEmails.length > 0) {
    fs.writeFileSync('emails_paroquias_mg.txt', allEmails.join('\n'));
    console.log(`E-mails armazenados em 'emails_paroquias_mg.txt'`);
  } else {
    console.log('Nenhum e-mail encontrado.');
  }
}

findParoquiasAndEmails();

