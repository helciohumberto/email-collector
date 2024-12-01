### Nome do Projeto: **Email Collector for Paroquias in Minas Gerais**

---

### README.md

```markdown
# Email Collector for Paroquias in Minas Gerais

Este projeto foi desenvolvido com o objetivo de economizar tempo na busca por e-mails de paróquias no sul de Minas Gerais, facilitando o contato para localizar certidões de casamento de antepassados. Ele utiliza a API de Pesquisa Personalizada do Google e a biblioteca Cheerio para automatizar o processo.

## 🚀 Funcionalidades

- Realiza buscas no Google usando a API de Pesquisa Personalizada.
- Faz scraping de páginas web para identificar e-mails.
- Armazena os e-mails encontrados em um arquivo `.txt` para fácil acesso.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Axios**: Cliente HTTP para realizar requisições.
- **Cheerio**: Biblioteca para scraping de conteúdo HTML.
- **Google Custom Search API**: API para realizar buscas no Google.
- **FS**: Biblioteca nativa do Node.js para manipulação de arquivos.

---

## 📂 Estrutura do Projeto

```plaintext
📦email-collector
 ┣ 📜app.js  // Código principal do projeto
 ┣ 📜emails_paroquias_mg.txt  // Arquivo gerado com os e-mails encontrados
 ┣ 📜package.json  // Configurações e dependências do projeto
 ┗ 📜README.md  // Documentação do projeto
```

---

## 📋 Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- Uma conta no [Google Cloud Platform](https://console.cloud.google.com/) para configurar a API de Pesquisa Personalizada.

### Passos para configurar a API de Pesquisa Personalizada do Google:
1. Crie um projeto no Google Cloud.
2. Habilite a API de Pesquisa Personalizada.
3. Crie um mecanismo de pesquisa personalizado no [Google Custom Search JSON API](https://programmablesearchengine.google.com/about/).
4. Obtenha sua `API_KEY` e `CX` (ID do mecanismo de pesquisa).

---

## ⚙️ Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/email-collector.git
   cd email-collector
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Adicione suas credenciais:
   Abra o arquivo `index.js` e insira sua `API_KEY` e `CX` nos campos correspondentes:
   ```javascript
   const API_KEY = 'sua_chave_api';
   const CX = 'seu_cx';
   ```

---

## 🚀 Como Executar

1. Inicie o script:
   ```bash
   node app.js
   ```

2. Após a execução, os e-mails coletados estarão disponíveis no arquivo `emails_paroquias_mg.txt`.

---

## 📌 Observações

- Este projeto respeita os Termos de Serviço do Google e deve ser utilizado apenas para finalidades legítimas.
- Certifique-se de que você tem permissão para utilizar as informações coletadas.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

---

## 🛡️ Aviso Legal

Este script foi desenvolvido para fins educacionais. Não nos responsabilizamos por qualquer uso indevido ou violação de direitos de terceiros.

---

### 🧑‍💻 Desenvolvedor
[Hélcio Humberto](https://github.com/helciohumberto)
```

Se precisar de alguma modificação, é só avisar! 😊# email-collector
