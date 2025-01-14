import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import i18n from "../i18n";

export const data = new SlashCommandBuilder().setName("hello").setDescription("Replies with Hello!");

export async function execute(interaction: CommandInteraction, createEmbed: Function) {
  const reply = i18n.t("hello", { lng: interaction.locale });
  const embed = createEmbed("Hello!", reply);
  return interaction.reply({ embeds: [embed] });
}
