import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';


const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.content === 'ping') {
        message.reply('pong');
    }
    if (message.content === 'Wassup') {
        message.reply('Wagwan famalam'); 
    }
    message.reply('Hey Buddy! What can I do for you?');
} );

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await interaction.reply('Boop!');
    }
    else if (commandName === 'wassup') {
        await interaction.reply('Wagwan famalam!');
    }
});
client.login(process.env.DISCORD_BOT_TOKEN);

