require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')

const bot = new TelegramApi(process.env.BOT_TOKEN, {polling: true});  //токен из .env

bot.on('message', msg => {
    // console.log(msg)
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/667/076/66707684-3a82-396b-aadd-1b2c6d3e4a5c/5.webp')
        bot.sendMessage(chatId,
            `Добро пожаловать в Telegram бот "Консультант преподавателя Политеха" Вы можете ознаомиться с функциями бота, нажав на /info`)
    }

    if (text === '/info') {
        bot.sendMessage(chatId, `${msg.from.first_name}, на данный момент бот находится на стадии разработки`)
    }
})