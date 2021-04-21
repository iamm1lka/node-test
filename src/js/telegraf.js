const { Telegraf } = require('telegraf');

const bot = new Telegraf('1787254550:AAH5W_lcOc9x1vRfV253XNqdRJL8kwvtvP8');

bot.start((ctx) => {
	ctx.reply('Привет, мешок с костями!');
});

bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Что тебе нужно, мешокс костями?'));

module.exports = bot;