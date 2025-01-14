import { CommandInteraction, SlashCommandBuilder, PermissionFlagsBits, CommandInteractionOptionResolver } from "discord.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const data = new SlashCommandBuilder()
  .setName("setlanguage")
  .setDescription("Set the bot language")
  .addStringOption((option) => option.setName("language").setDescription("Language code (e.g., en, pt-br)").setRequired(true));

export async function execute(interaction: CommandInteraction) {
  if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
    return interaction.reply("You do not have permission to use this command.");
  }

  const language = (interaction.options as CommandInteractionOptionResolver).getString("language")!;
  const guildId = interaction.guildId;

  if (!guildId) {
    return interaction.reply("This command can only be used in a server.");
  }

  await prisma.guild.upsert({
    where: { guildId },
    update: { language },
    create: { guildId, language },
  });

  return interaction.reply(`Language set to ${language}`);
}
