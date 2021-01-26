import { Embed } from "../../structs";

export class EmbedBuilder {
    private embed: Embed
    constructor(opts) {
        this.embed = {

        }
        if (!opts) return;
        if (opts.image) this.embed.thumbnailUrl = opts.image
        if (opts.thumbnail) this.embed.imageUrl = opts.thumbnail
        if (opts.title) this.embed.title = opts.title
        if (opts.desc) this.embed.description = opts.desc
    }
    build() {
        return this.embed
    }
}