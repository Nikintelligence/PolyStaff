require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')

const bot = new TelegramApi(process.env.BOT_TOKEN, {polling: true});  //токен из .env

bot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/info', description: 'Информация о боте'},
])

bot.on('message', msg => {
    // console.log(msg)
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
        bot.sendPhoto(chatId, 'src/images/ioysticer.png')
        bot.sendMessage(chatId, `Добро пожаловать в Telegram бот "Консультант преподавателя Политеха" Вы можете ознаомиться с функциями бота, нажав на /info`)
    }

    if (text === '/info') {
        bot.sendPhoto(chatId, 'src/images/holdcoffe.jpg')
        bot.sendMessage(chatId, `${msg.from.first_name}, на данный момент бот находится на стадии разработки`)
    }
})