export interface EmbedAuthor {
    value: String
    iconUrl?: String
}

export interface Embed {
    author?: EmbedAuthor
    title?: String
    description?: String
    color?: Number
    footer?: String
    imageUrl?: String
    thumbnailUrl?: String
}