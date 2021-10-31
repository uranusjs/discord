
export const Quality = {
  MAXIMUM: 4096,
  MINIMUM: 16,
  CUSTOM: (size: number) => size
}

export enum TypeFormats {
  JPEG = '.jpg',
  PNG = '.png',
  WEBP = '.webp',
  GIF = '.gif',
  LOTTIE = '.json'
}

export const endpoint = {
  CUSTOM_EMOJI: (emoji_id: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/emojis/${emoji_id}${format}${size}`
  },
  GUILD_ICON: (guild_id: string, guild_icon: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/icons/${guild_id}/${guild_icon}/${format}${size}`
  },
  GUILD_SPLASH: (guild_id: string, guild_splash: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/splashes/${guild_id}/${guild_splash}/${format}${size}`
  },
  GUILD_DISCOVERY_SPLASH: (guild_id: string, guild_splash: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/discovery-splashes/${guild_id}/${guild_splash}/${format}${size}`
  },
  GUILD_BANNER: (guild_id: string, guild_banner: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/banners/${guild_id}/${guild_banner}/${format}${size}`
  },
  USER_BANNER: (user_id: string, user_banner: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/banners/${user_id}/${user_banner}/${format}${size}`
  },
  DEFAULT_USER_AVATAR: (user_discriminator: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/embed/avatars/${user_discriminator}${format}${size}`
  },
  USER_AVATAR: (user_id: string, user_avatar: string, format: TypeFormats, quality?: typeof Quality) => {
    let size = '';
    if (quality !== undefined) {
      size = `?size=${size}`
    }
    return `https://cdn.discordapp.com/avatars/${user_id}/${user_avatar}${format}${size}`
  },
}
