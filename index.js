const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");




    bot.on('message', (message) => {
        if(message.content == 'Hendor') {
            message.reply('No Limit');
        }
    });



bot.login('NDg4MjkxMjczMjEyNjkwNDUx.DnaHJw.BKxnmV71Vf1LEf1j2cMUuiY7Iow');