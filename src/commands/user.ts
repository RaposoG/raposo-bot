import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import i18n from "../i18n";

export const data = new SlashCommandBuilder().setName("user").setDescription("Replies with user info!");

export async function execute(interaction: CommandInteraction) {
  const reply = i18n.t("userInfo", {
    lng: interaction.locale,
    tag: interaction.user.tag,
    id: interaction.user.id,
  });
  return interaction.reply(reply);
}
