import permittedCharacters from "./permitted-characters.js";
import dotenv from 'dotenv';
dotenv.config();

async function handle() {
    let characters = await permittedCharacters();
    let password = '';
    const passwordLength = Number(process.env.PASSWORD_LENGTH);


    for (let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}

export default handle;