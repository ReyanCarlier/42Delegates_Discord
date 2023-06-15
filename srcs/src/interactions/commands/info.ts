import { CommandInteraction, EmbedBuilder } from "discord.js";
import { Client, Discord, Slash } from "discordx";
import { guild_id, roles } from "../../config.json";

@Discord()
class Info {
    @Slash({
        name: "info",
        description: "Informations about your Delegates",
    })
    async info(interaction: CommandInteraction, client: Client) {
        let embed = new EmbedBuilder();
        embed
			.setColor("#ef8058")
			.setAuthor({
				name: client.user?.tag || "42Delegates",
				iconURL: client.user?.avatarURL() || undefined,
			})
			.setThumbnail(client.user?.avatarURL() || null)
			.setTitle("Your Delegates")
			.setDescription(`
			Promotion 2012-2020 : anroche / puttsche\n
			Promotion 2020-2021 : N/A\n
			Promotion 2021-2022 : ychibani / jbondri\n
			Promotion 2022-2023 : emis / pduhamel\n
			General Representative of Apprentices : hmidoun / jdurand\n
			General Student Representative : ychibani
			`);
		interaction.reply({ embeds: [embed] });
    }
}

export async function init(client: Client) {
    await client.initApplicationCommands();
    console.log("Info command inited");
}