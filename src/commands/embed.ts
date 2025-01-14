import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import i18n from "../i18n";

export const data = new SlashCommandBuilder().setName("embed").setDescription("Cria uma embed completa");

export async function execute(interaction: CommandInteraction) {
  const embed = {
    color: 0x0099ff,
    title: i18n.t("embedTitle"),
    url: "https://discord.js.org/",
    author: {
      name: i18n.t("embedAuthor"),
      icon_url: "https://i.imgur.com/wSTFkRM.png",
      url: "https://discord.js.org",
    },
    description: i18n.t("embedDescription"),
    thumbnail: {
      url: "https://i.imgur.com/wSTFkRM.png",
    },
    fields: [
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
    ],
    image: {
      url: "https://i.imgur.com/wSTFkRM.png",
    },
    timestamp: new Date().toISOString(),
    footer: {
      text: i18n.t("embedFooter"),
      icon_url: "https://i.imgur.com/wSTFkRM.png",
    },
  };

  await interaction.reply({ embeds: [embed] });
}
