
class MappingCache extends Map {
  static profileCache = (policyCache, check) => {
    
  }
}

class Utils {
  returnCall(a, b) {
    if (a !== undefined) {
      return true
    }
    return false
  }
}

module.exports = {
  Utils,
  ReferenceDiscord: {
    GatewayVersion: 9,
    RestVersion: 9,
    Gateway: 'ws://discord.gg',
    Domain: 'discord.com',
    CDN: 'cdn.discordapp.com',
    User: (user_id) => {
      return {
        id: `${user_id}`.replace(/<@>/g, ''),
        mention: `<@!${user_id.replace(/<@>/g, '')}>`,
      }
    },
    Channel: (channel_id) => {
      return {
        id: `${channel_id}`.replace(/<@>/g, ''),
        mention: `<@!${channel_id.replace(/<@>/g, '')}>`,
      }
    },
    Role: (role_id) => {
      return {
        id: `${role_id}`.replace(/<@>/g, ''),
        mention: `<@!${role_id.replace(/<@>/g, '')}>`,
      }
    },
    Emoji: (emoji) => {
      return {
        id: `${role_id}`.replace(/<:>/g, ''),
        animated: `${emoji}`.startsWith('<a'),
        mention: `<${`${emoji}`.startsWith('<a') ? 'a:': ''}:${role_id.replace(/<:>/g, '')}:>`,
      }
    },
    UnixTimestamp: (time, style) => {
      if (style !== undefined) {
        return `<t:${Date.parse(time)}:${style}>`
      } else {
        return `<t:${Date.parse(time)}:>`
      }
    }
  }
};