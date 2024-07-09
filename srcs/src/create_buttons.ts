import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
	MessageActionRowComponentBuilder,
	TextChannel,
	NewsChannel,
	ChannelType
} from "discord.js";
import { Client } from "discordx";
import { button_channel_id } from "./config.json";

export async function create_buttons(client: Client) {
	const channel = await client.channels.fetch(button_channel_id);

	if (channel && (channel.type === ChannelType.GuildText || channel.type === ChannelType.GuildNews)) {
		const textChannel = channel as TextChannel | NewsChannel; // Assurez-vous du type ici

		const messages = await textChannel.messages.fetch({ limit: 1 });
		if (messages.size != 0) {
			return;
		}

		const embed = new EmbedBuilder()
			.setTitle("Authentification")
			.setDescription(
				"Clique sur le bouton ci-dessous pour te connecter avec ton compte 42 et profiter pleinement de ce Discord !"
			)
			.setFooter({ text: "Originally created for LLD, by shocquen, dhubleur and tbrowang with <3" });

		const btn = new ButtonBuilder()
			.setLabel("Authentification")
			.setStyle(ButtonStyle.Success)
			.setCustomId("auth");

		const buttonRow =
			new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
				btn
			);

		await textChannel.send({ embeds: [embed], components: [buttonRow] });
	} else {
		console.log(
			"Impossible to init auth button because channel is not valid"
		);
	}
}
