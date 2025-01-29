const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${client.user.tag} olarak giriş yapıldı!`);
        
        client.user.setPresence({
            activities: [{
                name: "✨ by Shell Co.",
                type: ActivityType.Playing
            }],
            status: "idle"
        });
    }
};