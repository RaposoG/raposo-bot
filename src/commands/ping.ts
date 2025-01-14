import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import i18n from "../i18n";

export const data = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction, createEmbed: Function) {
  const reply = i18n.t("pong", { lng: interaction.locale });
  const embed = createEmbed("Pong!", reply);
  return interaction.reply({ embeds: [embed] });
}
