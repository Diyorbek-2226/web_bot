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
            [{ text: 'App', web_app: { url: 'https://telegram-web-nine.vercel.app/' } }], // Web App havolasi
            [{ text: 'Marketing' }], // Marketing xizmati
            [{ text: 'Konsultatsiya' }], // Konsultatsiya xizmati
            [{ text: 'Bog\'lanish' }] // Bog'lanish xizmati
        ],
        resize_keyboard: true, // Klaviaturani avtomatik o'lchash
        one_time_keyboard: true // Bir marta ko'rsatish
    };

    // Foydalanuvchiga xabar va reply keyboard yuborish
    bot.sendMessage(chatId, 'Quyidagi tugmalardan birini tanlang:', {
        reply_markup: keyboard
    });
});

// Marketing tugmasi uchun handler
bot.onText(/Marketing/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Marketing xizmati haqida ma\'lumot.');
});

// Konsultatsiya tugmasi uchun handler
bot.onText(/Konsultatsiya/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Konsultatsiya xizmati haqida ma\'lumot.');
});

// Bog'lanish tugmasi uchun handler
bot.onText(/Bog\'lanish/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Bog\'lanish uchun: +998901234567');
});

// Xatolarni qayd qilish
bot.on('polling_error', (error) => {
    console.error(`Polling error: ${error}`);
});