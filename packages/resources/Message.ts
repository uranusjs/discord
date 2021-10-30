import { InteractionType } from '../interaction/InteractionStructure';
import { Application } from './Application';
import { ChannelStructure, ThreadChannel } from './Channel';
import { EmojiStructure, GuildMemberStructure, RoleStructure, StickerPackStructure, StickerStructure } from './Guild';
import { User } from './User';

export interface AttachmentStructure {
  id: string;
  filename: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
}

export interface EmbedStructure {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  timestamp?: number;
  color?: number;
  footer?: EmbedFooterStructure;
  image?: EmbedImageStructure;
  thumbnail?: EmbedThumbnailStructure;
  video?: EmbedVideoStructure;
  provider?: EmbedProviderStructure;
  author?: EmbedAuthorStructure;
  fields: Array<EmbedFieldStructure>;
}

export interface EmbedFieldStructure {
  name: string;
  value: string;
  inline?: boolean;
}

export interface EmbedAuthorStructure {
  name?: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}


export interface EmbedProviderStructure {
  name?: string;
  url?: string;
}

export interface EmbedVideoStructure {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}


export interface EmbedThumbnailStructure {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedImageStructure {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedFooterStructure {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}



export interface ReactionStructure {
  count: number;
  me: boolean;
  emoji: EmojiStructure;
}

export interface MessageStructure {
  id: string;
  channel_id: string;
  guild_id?: string;
  author?: User;
  member?: GuildMemberStructure;
  content?: string;
  timestamp?: number;
  edited_timestamp?: number;
  tts?: boolean;
  mention_everyone?: boolean;
  mentions?: Array<GuildMemberStructure> | Array<User>;
  mention_roles?: Array<RoleStructure>;
  mention_channels?: Array<ChannelStructure>;
  attachments?: Array<AttachmentStructure>;
  embeds?: Array<EmbedStructure>;
  reactions?: Array<EmojiStructure>;
  nonce?: number | string;
  webhook_id?: string;
  type: typeof MessageTypes;
  activity?: ActivityMessage;
  application?: Application;
  application_id?: string;
  message_reference?: MessageReferenceStructure;
  referenced_message?: MessageStructure;
  interaction?: MessageInteractionStructure;
  thread?: ThreadChannel;
  components?: Array<ComponentStructure>;
  sticker_items?: Array<StickerPackStructure>
  stickers?: Array<StickerStructure>;
}

export const ComponentTypes = {
  ACTION_ROW: 1,
  BUTTON: 2,
  SELECT_MENU: 3
}

export const ButtonStyles = {
  PRIMARY: 1,
  SECONDARY: 2,
  SUCCESS: 3,
  DANGER: 4,
  LINK: 5
}

export interface SelectMenuStructure {
  type: typeof ComponentTypes.SELECT_MENU;
  custom_id: string;
  options: Array<SelectOptionStructure>;
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  disabled?: boolean; 
}


export interface SelectOptionStructure {
  label: string;
  value: string;
  description: string;
  emoji: EmojiStructure;
  default: boolean;
}

export interface ComponentStructure {
  type: typeof ComponentTypes;
  custom_id?: string;
  disabled?: boolean;
  style?: typeof ButtonStyles;
  label?: string;
  emoji?: EmojiStructure;
  url?: string;
  options: Array<SelectMenuStructure>;
  placeholder?: string;
  min_values?: number;
  max_values?: number;
  components?: Array<ComponentStructure>;
}

export interface MessageInteractionStructure {
  id: string;
  type: typeof InteractionType;
  name: string;
  user: User;
}

export const MessageTypes = {
  DEFAULT: 0,
  RECIPIENT_ADD: 1,
  RECIPIENT_REMOVE: 2,
  CALL: 3,
  CHANNEL_NAME_CHANGE: 4,
  CHANNEL_ICON_CHANGE: 5,
  CHANNEL_PINNED_MESSAGE: 6,
  GUILD_MEMBER_JOIN: 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION: 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1: 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2: 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3: 11,
  CHANNEL_FOLLOW_ADD: 12,
  GUILD_DISCOVERY_DISQUALIFIED: 14,
  GUILD_DISCOVERY_REQUALIFIED: 15,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING: 16,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING: 17,
  THREAD_CREATED: 18,
  REPLY: 19,
  CHAT_INPUT_COMMAND: 20,
  THREAD_STARTER_MESSAGE: 21,
  GUILD_INVITE_REMINDER: 22,
  CONTEXT_MENU_COMMAND: 23
}


export enum MessageFlags_ENUM {
  CROSSPOSTED = 1 << 0,
  IS_CROSSPOST = 1 << 1,
  SUPPRESS_EMBEDS = 1 << 2,
  SOURCE_MESSAGE_DELETED = 1 << 3,
  URGENTE = 1 << 4,
  HAS_THREAD = 1 << 5,
  EPHEMERAL = 1 << 6,
  LOADING = 1 << 7
}

export interface MessageFlagsInterface {
  CROSSPOSTED: number;
  IS_CROSSPOS: number;
  SUPPRESS_EMBEDS: number;
  SOURCE_MESSAGE_DELETED: number;
  URGENTE: number;
  HAS_THREAD: number;
  EPHEMERAL: number;
  LOADING: number;
}

export interface MessageReferenceStructure {
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
}


export interface ActivityMessage {
  type: MessageActivityTypes;
  party_id?: string;
}

export enum MessageActivityTypes {
  JOIN = 1,
  SPECTATE = 2,
  LISTEN = 3,
  JOIN_REQUEST = 5
}
