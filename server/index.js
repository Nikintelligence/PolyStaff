require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')
const {startOptions, functionOptions, infoOptions} = require('./options')

const bot = new TelegramApi(process.env.BOT_TOKEN, {polling: true});  //токен из .env

bot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/info', description: 'Информация о боте'},
])

const start = async () => {
    bot.on('message', msg => {
        console.log(msg)
        const text = msg.text;
        const chatId = msg.chat.id;

        try {
            if (text === '/start') {
                bot.sendPhoto(chatId, 'src/images/ioysticer.png')
                bot.sendMessage(chatId,
                    `Добро пожаловать в Telegram бот "Консультант преподавателя Политеха"! Вы можете ознакомиться с информацией о боте, нажав на /info`,
                    infoOptions)
            }

            if (text === '/info') {
                bot.sendPhoto(chatId, 'src/images/holdcoffe.jpg')
                bot.sendMessage(chatId,
                    `${msg.from.first_name}, на данный момент бот находится на стадии разработки`,
                    startOptions)
            }
        } catch (e) {
            return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)');
        }
    })
    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if (data === '/info') {
            await bot.sendPhoto(chatId, 'src/images/holdcoffe.jpg')
            await bot.sendMessage(chatId,
                `${msg.from.first_name}, на данный момент бот находится на стадии разработки`,
                startOptions)
        }

        if (data === '/functions') {
            await  bot.sendMessage(chatId, `функции бота и тп`, functionOptions)
        }

        if (data === '/login') {
            await  bot.sendMessage(chatId, `Login link`)
        }

        if (data === '/anonContinue') {
            await  bot.sendMessage(chatId, `Continue usage`)
        }
    })
}

start()
