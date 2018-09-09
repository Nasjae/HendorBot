const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName:'roll',
            description:'Dice Roll'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 1000000) + 1;
        message.reply("Kode Kramat Anda " + roll);
    }
}
module.exports = DiceRollCommand;