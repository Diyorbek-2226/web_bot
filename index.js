const TelegramBot = require('node-telegram-bot-api');
const token = '7726168519:AAHYfB_XvRtoPS7tYShJcm4rUl6j8Nwxsxk'; // Sizning tokeniz

// Botni yaratish va polling rejimida ishga tushirish
const bot = new TelegramBot(token, { polling: true });

// /start buyrug'i uchun handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Reply Keyboard yaratish
    const keyboard = {
        keyboard: [
            [{ text: 'App', web_app: { url: 'https://telegram-web-nine.vercel.app/' } }] // Web App havolasi
        ],
        resize_keyboard: true, // Klaviaturani avtomatik o'lchash
        one_time_keyboard: true // Bir marta ko'rsatish
    };

    // Foydalanuvchiga xabar va reply keyboard yuborish
    bot.sendMessage(chatId, 'Quyidagi "App" tugmasini bosing:', {
        reply_markup: keyboard
    });
});

// Xatolarni qayd qilish
bot.on('polling_error', (error) => {
    console.error(`Polling error: ${error}`);
});