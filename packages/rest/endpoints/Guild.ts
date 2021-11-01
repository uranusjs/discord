export const ENDPOINT_AUDIT_LOG_GUILD = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/audit-logs`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/audit-logs`
    }
  }
}


export const ENDPOINT_GUILD = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}`
    }
  }
}

export const ENDPOINT_GUILD_PREVIEW = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/preview`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/preview`
    }
  }
}



export const ENDPOINT_GUILD_MODIFY = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}`
    }
  }
}


export const ENDPOINT_GUILD_DELETE = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}`
    }
  }
}

export const ENDPOINT_GUILD_GET_CHANNELS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/channels`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/channels`
    }
  }
}

export const ENDPOINT_GUILD_GET_CHANNEL = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/channels/:channel_snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/channels/${snowflake_2}`
    }
  }
}


export const ENDPOINT_GUILD_CREATE_CHANNEL = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/channels`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/channels`
    }
  }
}


export const ENDPOINT_GUILD_MODIFY_CHANNEL_POSITION = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/channels`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/channels`
    }
  }
}



export const ENDPOINT_GUILD_THREADS_ACTIVE = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/threads/active`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/threads/active`
    }
  }
}




export const ENDPOINT_GUILD_GET_MEMBER = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/members/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/${snowflake_2}`
    }
  }
}




export const ENDPOINT_GUILD_GET_MEMBER_LIST = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/members`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members`
    }
  }
}



export const ENDPOINT_GUILD_MODIFY_MEMBER_LIST = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/members/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/${snowflake_2}`
    }
  }
}


export const ENDPOINT_GUILD_MODIFY_ME = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/members/@me`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/@me`
    }
  }
}



export const ENDPOINT_GUILD_MODIFY_CURRENT_USER_NICK = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/members/@me/nick`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/@me/nick`
    }
  }
}



export const ENDPOINT_ADD_GUILD_MEMBER_ROLE = (snowflake: string, snowflake_2: string, snowflake_3: string, query_str?: string) => {
  return {
    details: {
      method: 'PUT',
      endpoint_tag: `/guilds/:snowflake/members/:snowflake/roles/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/${snowflake_2}/roles/${snowflake_3}`
    }
  }
}





export const ENDPOINT_SEARCH_GUILD_MEMBERS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/members/search`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/search`
    }
  }
}



export const ENDPOINT_REMOVE_GUILD_MEMBER_ROLE = (snowflake: string, snowflake_2: string, snowflake_3: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake/members/:snowflake/roles/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/${snowflake_2}/roles/${snowflake_3}`
    }
  }
}



export const ENDPOINT_REMOVE_GUILD_MEMBER = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake/members/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/members/${snowflake_2}`
    }
  }
}


export const ENDPOINT_GET_GUILD_BANS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/bans`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/bans`
    }
  }
}



export const ENDPOINT_GET_GUILD_BAN = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/bans/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/bans/${snowflake_2}`
    }
  }
}



export const ENDPOINT_CREATE_GUILD_BAN = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'PUT',
      endpoint_tag: `/guilds/:snowflake/bans/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/bans/${snowflake_2}`
    }
  }
}




export const ENDPOINT_REMOVE_GUILD_BAN = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'REMOVE',
      endpoint_tag: `/guilds/:snowflake/bans/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/bans/${snowflake_2}`
    }
  }
}




export const ENDPOINT_CREATE_GUILD_ROLE = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'POST',
      endpoint_tag: `/guilds/:snowflake/roles`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/roles`
    }
  }
}




export const ENDPOINT_MODIFY_GUILD_ROLE_POSITIONS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/roles`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/roles`
    }
  }
}




export const ENDPOINT_MODIFY_GUILD_ROLE = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/roles/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/roles/${snowflake_2}`
    }
  }
}




export const ENDPOINT_DELETE_GUILD_ROLE = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake/roles/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/roles/${snowflake_2}`
    }
  }
}




export const ENDPOINT_GET_GUILD_PRUNE_COUNT = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake/prune`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/prune`
    }
  }
}




export const ENDPOINT_BEGIN_GUILD_PRUNE = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'POST',
      endpoint_tag: `/guilds/:snowflake/prune`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/prune`
    }
  }
}





export const ENDPOINT_GET_GUILD_VOICE_REGIONS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/regions`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/regions`
    }
  }
}




export const ENDPOINT_GET_GUILD_INVITES = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/invites`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/invites`
    }
  }
}




export const ENDPOINT_GET_GUILD_INTEGRATION = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/integration`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/integration`
    }
  }
}




export const ENDPOINT_DELETE_GUILD_INTEGRATION = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake/integration/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/integration/${snowflake_2}`
    }
  }
}





export const ENDPOINT_GET_GUILD_WIDGET_SETTINGS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'DELETE',
      endpoint_tag: `/guilds/:snowflake/widget`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/widget`
    }
  }
}




export const ENDPOINT_MODIFY_GUILD_WIDGET_SETTINGS = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/widget`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/widget`
    }
  }
}




export const ENDPOINT_GET_GUILD_WIDGET = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/widget.json`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/widget.json`
    }
  }
}




export const ENDPOINT_GET_GUILD_VANITY_URL = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'GET',
      endpoint_tag: `/guilds/:snowflake/vanity-url`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/vanity-url`
    }
  }
}


export const ENDPOINT_MODIFY_CURRENT_USER_VOICE_STATE = (snowflake: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/voice_states/@me`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/voice_states/@me`
    }
  }
}




export const ENDPOINT_MODIFY_USER_VOICE_STATE = (snowflake: string, snowflake_2: string, query_str?: string) => {
  return {
    details: {
      method: 'PATCH',
      endpoint_tag: `/guilds/:snowflake/voice_states/:snowflake`,
      options: query_str == null ? query_str : null,
      endpoint: `/guilds/${snowflake}/voice_states/${snowflake_2}`
    }
  }
}
