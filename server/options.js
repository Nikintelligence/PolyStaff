module.exports = {
    infoOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Info', callback_data: '/info'}],
            ]
        })
    },
    startOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Узнать о функциях бота', callback_data: '/functions'}],
                [{text: 'Зарегистрироваться', callback_data: '/login'}],
                [{text: 'Продолжить использование анонимно', callback_data: '/anonContinue'}],
            ]
        })
    },
    functionOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Зарегистрироваться', callback_data: '/login'}],
                [{text: 'Продолжить использование анонимно', callback_data: '/anonContinue'}],
            ]
        })
    }
}