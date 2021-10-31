import { ReadyEvent } from '../dispatch/Ready';
import { PayloadMessage, WebsocketNetwork } from '../Websocket';



export function reconnect(_ws: WebsocketNetwork, code: number) {
 // const discord_codes = [4000, 4001, 4003, 4004, 4005, 4007, 4008, 4009, 4010, 4011, 4012, 4013, 4014]


  switch (code) {
    case 4009: {

    }
  }
}

export function gateway_message(ws: WebsocketNetwork, message: PayloadMessage) {
  const d = message.d;


  switch (message.t) {
    case EventDispatch.Ready: {
      new ReadyEvent(ws, d)
    }
      break;
  }
}





export enum EventDispatch {
  Ready = 'READY',
  Resumed = 'RESUMED',
  Reconnect = 'RECONNECT',
  InvalidSession = 'INVALID_SESSION',
  ChannelCreate = 'CHANNEL_CREATE',
  ChannelDelete = 'CHANNEL_DELETE',
  ChannelUpdate = 'CHANNEL_UPDATE',
  ChannelPinsUpdate = 'CHANNEL_PINS_UPDATE',
  ThreadCreate = 'THREAD_CREATE',
  ThreadUpdate = 'THREAD_UPDATE',
  ThreadDelete = 'THREAD_DELETE',
  ThreadListSync = 'THREAD_LIST_SYNC',
  ThreadMemberUpdate = 'THREAD_MEMBER_UPDATE',
  ThreadMembersUpdate = 'THREAD_MEMBERS_UPDATE',
  GuildCreate = 'GUILD_CREATE',
  GuildUpdate = 'GUILD_UPDATE',
  GuildDelete = 'GUILD_DELTE',
  GuildBanAdd = 'GUILD_BAN_ADD',
  GuildBanRemove = 'GUILD_BAN_REMOVE',
  GuildEmojisUpdate = 'GUILD_EMOJIS_UPDATE',
  GuildStickersUpdate = 'GUILD_STICKERS_UPDATE',
  GuildIntegrationsUpdate = 'GUILD_INTEGRATIONS_UPDAT',
  GuildMemberAdd = 'GUILD_MEMBER_ADD',
  GuildMemberRemove = 'GUILD_MEMBER_REMOVE',
  GuildMemberUpdate = 'GUILD_MEMBER_UPDATE',
  GuildMembersChunk = 'GUILD_MEMBERS_CHUNK',
  GuildRoleCreate = 'GUILD_ROLE_CREATE',
  GuildRoleUpdate = 'GUILD_ROLE_UPDATE',
  GuildRoleDelete = 'GUILD_ROLE_DELETE',
  IntegrationCreate = 'INTEGRATION_CREATE',
  IntegrationUpdate = 'INTEGRATION_UPDATE',
  IntegrationDelete = 'INTEGRATION_DELETE',
  InviteCreate = 'INVITE_CREATE',
  InviteDelete = 'INVITE_DELETE',
  MessageCreate = 'MESSAGE_CREATE',
  MessageUpdate = 'MESSAGE_UPDATE',
  MessageDelete = 'MESSAGE_DELETE',
  MessageDeleteBulk = 'MESSAGE_DELETE_BULK',
  MessageReactionAdd = 'MESSAGE_REACTION_ADD',
  MessageReactionRemove = 'MESSAGE_REACTION_REMOVE',
  MessageReactionRemoveAll = 'MESSAGE_REACTION_REMOVE_ALL',
  MessageReactionRemoveEmoji = 'MESSAGE_REACTION_EMOJI',
  PresenceUpdate = 'PRESENCE_UPDATE',
  StageInstanceCreate = 'STAGE_INSTANCE_CREATE',
  StageInstanceDelete = 'STAGE_INSTANCE_DELETE',
  StageInstanceUpdate = 'STAGE_INSTANCE_UPDATE',
  TypingStart = 'TYPING_START',
  UserUpdate = 'USER_UPDATE',
  VoiceStateUpdate = 'VOICE_STATE_UPDATE',
  VoiceServerUpdate = 'VOICE_SERVER_UPDATE',
  WebhooksUpdate = 'WEBHOOKS_UPDATE'



}