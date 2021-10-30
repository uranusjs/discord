import { EmojiStructure, GuildMemberStructure } from './Guild';
import { User } from './User';



export const ActivityTypes = {
  GAME: 0,
  STREAMING: 1,
  LISTENING: 2,
  WATCHING: 3,
  CUSTOM: 4,
  COMPETING: 5
}


export interface PresenceUpdateEventFields {
  user: User;
  guild_id: string;
  status: string;
}

export interface ActivityStructure {
  name: string;
  type: typeof ActivityTypes;
  url?: string;
  created_at: number;
  timestamps?: ActivityTimestamps;
  application_id?: string;
  details?: string;
  state?: string;
  emoji?: EmojiStructure;
  party?: ActivityParty;
  assets?: ActivityAssets;
  secrets?: ActivitySecrets;
  instance?: boolean;
  flags?: typeof ActivityTypes;
  buttons?: ActivityButtons;
}

export interface ActivityTimestamps {
  start?: number;
  end?: number;
}

export interface ActivityEmoji {
  name: string;
  id?: string;
  animated: boolean;
}

export interface ActivityParty {
  id?: string;
  size?: string;
}

export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface ActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

export const ActivityFlags = {
  INSTANCE: 1 << 0,
  JOIN: 1 << 1,
  SPECTATE: 1 << 2,
  JOIN_REQUEST: 1 << 3,
  SYNC: 1 << 4,
  PLAY: 1 << 5
}


export interface ActivityButtons {
  label: string;
  url: string;
}


export interface TypingStartEventFields {
  channel_id: string;
  guild_id?: string;
  user_id: string;
  timestamp: string;
  member?: GuildMemberStructure;
}
 
export interface VoiceServerUpdateEventFields {
  token: string;
  guild_id: string;
  endpoint: string;
}

export interface WebhookUpdateEventFields {
  guild_id: string;
  channel_id: string;
}
