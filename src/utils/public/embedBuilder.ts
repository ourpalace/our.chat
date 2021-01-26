import { Embed } from "../../structs";

export class EmbedBuilder {
    private embed: Embed
    /**
     * ## Basic embed builder.
     * @param opts {Embed} Use this to put a base embed for the builder to use
     * @param opts.author {EmbedAuthor} Your embeds author
     * @param opts.author.value {String} The embed authors text
     * @param opts.author.iconURL {String} The embeds icon URL
     * @param opts.title {String} The embeds title
     * @param opts.description {String} The embeds description
     * @param opts.footer {String} The embeds footer
     * @param imageURL {String} The embeds big image URL
     * @param thumbnailURL {String} The embeds small image URL
     * @returns {EmbedBuilder} The embed builder to build your embed with
    */
    constructor(opts) {
        this.embed = {}
        if (!opts) return
        if (opts.author && opts.author == {value: String, iconURL: String}) this.embed.author = opts.author
        if (opts.title && typeof opts.title == 'string') this.embed.title = opts.title
    }
    /**
     * ## Sets the author
     * @param value {String} The text for the embed author
     * @param iconUrl {String} An image link for the embed icon
     * @example setAuthor('test', 'https://i.imgur.com/abcdef.png')
     * @returns {EmbedBuilder} A new embed builder, can be used to build further.
     */
    setAuthor(value: String, iconUrl: String): EmbedBuilder {
        if (iconUrl) {
            this.embed.author = {
                value,
                iconUrl
            }
        } else this.embed.author = {
            value
        }
        return this;
    }
    /**
     * ## Sets the title
     * @param value {String} The text for the embed title
     * @example setTitle('test')
     * @returns {EmbedBuilder} A new embed builder, can be used to build further.
     */
    setTitle(value: String) {
        if (value && typeof value == 'string') {
            this.embed.title = value
        } else {
            this.embed.title = "undefined"
        }
        return this;
    }
    /**
     * ## Sets the description
     * @param value {String} The text for the embed description
     * @example setDescription('blah blah blah blah blah')
     * @returns {EmbedBuilder} A new embed builder, can be used to build further.
     */
    setDescription(value: String) {
        if (value && typeof value == 'string') {
            this.embed.description = value
        } else {
            this.embed.description = "undefined"
        }
        return this
    }
    /** 
    * ## Sets the footer
    * @param value {String} The text for the embed footer
    * @example setFooter('text')
    * @returns {EmbedBuilder} A new embed builder, can be used to build further.
    */
   setFooter(value: String) {
       if (value && typeof value == 'string') {
           this.embed.footer = value
       } else {
           this.embed.footer = "undefined"
       }
       return this
   }
    /** 
    * ## Sets the image
    * @param value {String} The image URL for the embed 
    * @example setImage('https://i.imgur.com/abcdef.png')
    * @returns {EmbedBuilder} A new embed builder, can be used to build further.
    */
  setImage(value: String) {
    if (value && typeof value == 'string') {
        this.embed.thumbnailUrl = value
    } else {
        this.embed.thumbnailUrl = "undefined"
    }
    return this
  }
    /** 
    * ## Sets the thumbnail
    * @param value {String} The image URL for the embed thumbnail
    * @example setThumnail('https://i.imgur.com/abcdef.png')
    * @returns {EmbedBuilder} A new embed builder, can be used to build further.
    */
  setThumbnail(value: String) {
    if (value && typeof value == 'string') {
      this.embed.imageUrl = value
    } else {
      this.embed.imageUrl = "undefined"
    }
    return this
  }
  /**
   * ## Returns the built embed
   * @example <EmbedBuilder>.finish()
   * @returns {Embed} The embed that you can send to the API
   */
  /*
   [TODO] 
   Make this function obsolete. 
   (e.g. remove it and allow you to just be able to put embed instead of embed.finish())
  */
  finish(): Embed {
    return this.embed;
  }
}