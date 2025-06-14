import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite um link para gerar o QR CODE"),
    
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre o tipo (1- Normal ou (2- Teminal"),
        pattern: /^[1-2]+$/,
        message: chalk.bold.bgRed("Escolha apenas entre 1 e 2"),
        require: true,
    }
];

export default promptQRCode;