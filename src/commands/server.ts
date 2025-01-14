import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import i18n from "../i18n";

export const data = new SlashCommandBuilder().setName("server").setDescription("Replies with server info!");

export async function execute(interaction: CommandInteraction) {
  const reply = i18n.t("serverInfo", {
    lng: interaction.locale,
    name: interaction.guild?.name,
    count: interaction.guild?.memberCount,
  });
  return interaction.reply(reply);
}
