import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import i18n from "../i18n";

export const data = new SlashCommandBuilder().setName("embed").setDescription("Cria uma embed completa");

export async function execute(interaction: CommandInteraction, createEmbed: Function) {
  const embed = createEmbed(
    i18n.t("embedTitle"),
    i18n.t("embedDescription")
  );
  embed.url = "https://discord.js.org/";
  embed.author = {
    name: i18n.t("embedAuthor"),
    icon_url: "https://i.imgur.com/wSTFkRM.png",
    url: "https://discord.js.org",
  };
  embed.thumbnail = {
    url: "https://i.imgur.com/wSTFkRM.png",
  };
  embed.fields = [
    {
      name: i18n.t("embedField1Name"),
      value: i18n.t("embedField1Value"),
    },
    {
      name: i18n.t("embedField2Name"),
      value: i18n.t("embedField2Value"),
      inline: true,
    },
    {
      name: i18n.t("embedField3Name"),
      value: i18n.t("embedField3Value"),
      inline: true,
    },
  ];
  embed.image = {
    url: "https://i.imgur.com/wSTFkRM.png",
  };

  await interaction.reply({ embeds: [embed] });
}
