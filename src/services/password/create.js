import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green.bold("⬇️ Sua senha abaixo ⬇️ "));
    const password = await handle();
    console.log(chalk.blue.bold(password));
}

export default createPassword;