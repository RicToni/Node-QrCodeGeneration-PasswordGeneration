# 🔐📷 Node QR Code & Password Generator

Ferramenta de linha de comando em Node.js para geração de **QR Codes a partir de links** e **senhas aleatórias configuráveis via `.env`**. Feita para quem quer praticidade e controle direto no terminal. 🚀

---

## 📌 Funcionalidades

- ✅ **Gerador de QR Code** com base em links inseridos pelo usuário  
- ✅ **Gerador de Senhas** com configurações personalizadas via `.env`  
- ✅ Interface simples via terminal com prompts interativos  
- ✅ Destaques coloridos para melhor leitura (via `chalk`)

---

## 🔗 Repositório

Acesse o projeto no GitHub:

👉 [https://github.com/RicToni/Node-QrCodeGeneration-PasswordGeneration](https://github.com/RicToni/Node-QrCodeGeneration-PasswordGeneration)

---

## 📦 Tecnologias e Pacotes Usados

- [Node.js](https://nodejs.org/)
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) – gera QR Codes direto no terminal  
- [`chalk`](https://www.npmjs.com/package/chalk) – colorização da saída no terminal  
- [`prompt`](https://www.npmjs.com/package/prompt) – entrada interativa de dados  
- [`dotenv`](https://www.npmjs.com/package/dotenv) – leitura de variáveis de ambiente via `.env`

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/RicToni/Node-QrCodeGeneration-PasswordGeneration.git
cd Node-QrCodeGeneration-PasswordGeneration
```
2. Instale as dependências:
```bash
npm install
```
3. Crie um arquivo .env na raiz com a configuração do gerador de senhas (veja abaixo 👇)
```bash
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## 🚀 Como Usar
Execute o comando abaixo para iniciar o programa:
```bash
npm start
```
