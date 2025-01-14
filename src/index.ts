import { Client } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands";
import { config } from "./env";
import i18n from "./i18n";
import { PrismaClient } from "@prisma/client";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

const prisma = new PrismaClient();

console.log("DISCORD_TOKEN:", config.DISCORD_TOKEN);
console.log("DISCORD_CLIENT_ID:", config.DISCORD_CLIENT_ID);

client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");
  const guilds = await client.guilds.fetch();
  guilds.forEach(async (guild) => {
    await deployCommands({ guildId: guild.id });
    console.log(`Deployed commands to guild: ${guild.name}`);
  });
});

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
  console.log(`Deployed commands to guild: ${guild.name}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName, guildId } = interaction;

  if (guildId) {
    const guild = await prisma.guild.findUnique({ where: { guildId } });
    if (guild) {
      i18n.changeLanguage(guild.language);
    }
  }

  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(config.DISCORD_TOKEN);
