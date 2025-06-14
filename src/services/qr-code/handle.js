import qr from "qrcode-terminal";
import chalk from "chalk";


async function handle(err, result){
    if (err){
        console.log(chalk.bgRed.bold("error on application"));
        return
    }
    const isSamll = result.type == 2;
    qr.generate(result.link, {small: isSamll}, (qrcode) => {
        console.log(chalk.green.bold("QR CODE gerado com sucesso..."));
        console.log(qrcode);
    });

}

export default handle