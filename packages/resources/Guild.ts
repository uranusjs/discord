import { ChannelRest } from '../rest/definitions/ChannelRest';
import { RestOptions } from '../rest/definitions/RestOptions';
import { Application } from './Application';
import { ThreadStructure, TypeChannel } from './Channel';
import { PresenceUpdateEventFields } from './Gateway';
import { User } from './User';


export const DefaultMessageNotificationLevel = {
  ALL_MESSAGES: 0,
  ONLY_MENTIONS: 1
}

export const ExplicitContentFilterLevel = {
  DISABLED: 0,
  MEMBERS_WITHOUT_ROLES: 1,
  ALL_MEMBERS: 2
}
export const MFALevel = {
  NONE: 0,
  ELEVATED: 1
}
export const VerificationLevel = {
  NONE: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  VERY_HIGH: 4
}
export const GuildNSFWLevel = {
  DEFAULT: 0,
  EXPLICIT: 1,
  SAFE: 2,
  AGE_RESTRICTED: 3
}
export const PremiumTier = {
  NONE: 0,
  TIER_1: 1,
  TIER_2: 2,
  TIER_3: 3
}
export const SystemChannelFlags = {
  SUPPRESS_JOIN_NOTIFICATIONS: 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS: 1 << 1,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS: 1 << 2
}
export const GuildFeatures = ['ANIMATED_ICON', 'BANNER', 'COMMERCE', 'COMMUNITY', 'DISCOVERABLE', 'FEATURABLE', 'INVITE_SPLASH', 'MEMBER_VERIFICATION_GATE_ENABLED', 'MONETIZATION_ENABLED', 'MORE_STICKERS', 'NEWS', 'PARTNERED', 'PREVIEW_ENABLED', 'PRIVATE_THREADS', 'ROLE_ICONS', 'SEVEN_DAY_THREAD_ARCHIVE', 'THREE_DAY_THREAD_ARCHIVE', 'TICKETED_EVENTS_ENABLED', 'VANITY_URL', 'VERIFIED', 'VIP_REGIONS', 'WELCOME_SCREEN_ENABLED']


export interface GuildPreviewStructure {
  id: string;
  name: string;
  icon: string;
  splash: string;
  discovery_splash: string;
  emojis: Array<EmojiStructure>;
  features: typeof GuildFeatures;
  approximate_member_count: number;
  approximate_presence_count: number;
  description?: string;
}

export interface EmojiStructure {
  id: string;
  name: string;
  roles?: Array<RoleStructure>;
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}

export interface RoleStructure {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  icon?: string;
  unicode_emoji: string;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTagsStructure;
}

export interface RoleTagsStructure {
  bot_id?: string;
  integration_id?: string;
  premium_subscriber?: null;
}

export interface GuildMemberStructure {
  user?: User;
  nick?: string;
  avatar?: string;
  roles: Array<RoleStructure>;
  joined_at: number;
  premium_since?: number;
  deaf: boolean;
  mute: boolean;
  pending: boolean;
  permissions: string;
}

export const IntegrationExpireBehaviors = {
  REMOVE_ROLE: 1,
  KICK: 1
}


export interface IntegrationAccountObject {
  id: string;
  name: string;
}

export interface IntegrationStructure {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  syncing?: boolean;
  role_id?: string;
  enable_emoticons?: boolean;
  expire_behavior?: typeof IntegrationExpireBehaviors;
  expire_grace_period?: number;
  user?: User;
  account: IntegrationAccountObject;
  synced_at?: number;
  subscriber_count?: number;
  revoked?: boolean;
  application?: Application;
}

export interface BanStructure {
  reason: string;
  user: User;
}

export interface WelcomeScreenChannelStructure {
  channel_id: string;
  description: string;
  emoji_id: string;
  emoji_name: string;
}

export interface WelcomeScreenObject {
  description: string;
  welcome_channels: Array<WelcomeScreenChannelStructure>
}

export const StickerTypes = {
  STANDARD: 1,
  GUILD: 2
}

export const StickerFormatTypes = {
  PNG: 1,
  APNG: 2,
  LOTTIE: 3
}


export interface StickerStructure {
  id: string;
  pack_id?: string;
  name: string;
  description: string;
  tags: string;
  /**
   * @deprecated
   * @description previously the sticker asset hash, now an empty string
   */
  asset: string;
  type: typeof StickerTypes;
  format_type: typeof StickerFormatTypes;
  available: boolean;
  guild_id?: string;
  user?: User;
  sort_value?: number;
}


export interface StickerItemObject {
  id: string;
  name: string;
  format_type: typeof StickerFormatTypes;
}

export const PrivacyLevel = {
  PUBLIC: 1,
  GUILD_ONLY: 2
}


export interface StageInstanceStructure {
  id: string;
  guild_id: string;
  channel_id: string;
  topic: string;
  privacy_level: typeof PrivacyLevel;
  discoverable_disabled: boolean;
}


export interface StickerPackStructure {
  id: string;
  stickers: Array<StickerStructure>;
  name: string;
  sku_id: string;
  cover_sticker_id?: string;
  description: string;
  banner_asset_id: string;
}

export interface VoiceStateObject {
  guild_id?: string;
  channel_id: string;
  user_id: string;
  member?: GuildMemberStructure;
  session_id: string;
  deaf: boolean;
  mute: boolean;
  self_deaf: boolean;
  self_mute: boolean;
  self_stream?: boolean;
  self_video: boolean;
  suppress: boolean;
  request_to_speak_timestamp: number;
}


export interface GuildStructure {
  id: string;
  name?: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: boolean;
  owner_id?: string;
  permissions?: string;
  region?: string;
  afk_channel_id?: string;
  afk_timeout?: number;
  widget_enabled?: boolean;
  widget_channel_id?: string;
  verification_level?: number;
  default_message_notifications?: number;
  explicit_content_filter?: number;
  roles?: Array<RoleStructure>;
  emojis?: Array<EmojiStructure>;
  features?: Array<typeof GuildFeatures>;
  mfa_level?: number;
  application_id?: string;
  system_channel_id?: string;
  system_channel_flags?: number;
  rules_channel_id?: string;
  joined_at?: string;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: Array<VoiceStateObject>;
  members?: Array<GuildMemberStructure>;
  channels?: Array<TypeChannel>;
  threads?: Array<ThreadStructure>;
  presences?: Array<PresenceUpdateEventFields>;
  max_presences?: number;
  max_members?: number;
  vanity_url_code?: string;
  description?: string;
  banner?: string;
  premium_tier?: number;
  preferred_locale?: string;
  public_updates_channel_id?: string;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreenChannelStructure;
  nsfw_level?: number;
  stage_instancs?: Array<StageInstanceStructure>;
  stickers?: Array<StickerStructure>;
}


export class Guild implements GuildStructure {
  id: string;
  name?: string | undefined;
  icon?: string | undefined;
  icon_hash?: string | undefined;
  splash?: string | undefined;
  discovery_splash?: string | undefined;
  owner?: boolean | undefined;
  owner_id?: string | undefined;
  permissions?: string | undefined;
  region?: string | undefined;
  afk_channel_id?: string | undefined;
  afk_timeout?: number | undefined;
  widget_enabled?: boolean | undefined;
  widget_channel_id?: string | undefined;
  verification_level?: number | undefined;
  default_message_notifications?: number | undefined;
  explicit_content_filter?: number | undefined;
  roles?: RoleStructure[] | undefined;
  emojis?: EmojiStructure[] | undefined;
  features?: string[][] | undefined;
  mfa_level?: number | undefined;
  application_id?: string | undefined;
  system_channel_id?: string | undefined;
  system_channel_flags?: number | undefined;
  rules_channel_id?: string | undefined;
  joined_at?: string | undefined;
  large?: boolean | undefined;
  unavailable?: boolean | undefined;
  member_count?: number | undefined;
  voice_states?: VoiceStateObject[] | undefined;
  members?: GuildMemberStructure[] | undefined;
  channels?: TypeChannel[] | undefined;
  threads?: ThreadStructure[] | undefined;
  presences?: PresenceUpdateEventFields[] | undefined;
  max_presences?: number | undefined;
  max_members?: number | undefined;
  vanity_url_code?: string | undefined;
  description?: string | undefined;
  banner?: string | undefined;
  premium_tier?: number | undefined;
  preferred_locale?: string | undefined;
  public_updates_channel_id?: string | undefined;
  max_video_channel_users?: number | undefined;
  approximate_member_count?: number | undefined;
  approximate_presence_count?: number | undefined;
  welcome_screen?: WelcomeScreenChannelStructure | undefined;
  nsfw_level?: number | undefined;
  stage_instancs?: StageInstanceStructure[] | undefined;
  stickers?: StickerStructure[] | undefined;
  rest: ChannelRest;
  options_rest: RestOptions;
  constructor(rest: ChannelRest, structure: GuildStructure, options_rest: RestOptions) 
  {
    this.id = structure.id;
    this.rest = rest;
    this.options_rest = options_rest;
    if (structure.name !== undefined) {
      this.name = structure.name;
    }
    if (structure.icon !== undefined) {
      this.icon = structure.icon;
    }
    if (structure.icon_hash !== undefined) {
      this.icon_hash = structure.icon_hash;
    }
    if (structure.splash !== undefined) {
      this.splash = structure.splash;
    }
    if (structure.discovery_splash !== undefined) {
      this.discovery_splash = structure.discovery_splash;
    }
    if (structure.owner !== undefined) {
      this.owner = structure.owner;
    }
    if (structure.owner_id !== undefined) {
      this.owner_id = structure.owner_id;
    }
    if (structure.permissions !== undefined) {
      this.permissions = structure.permissions;
    }
    if (structure.region !== undefined) {
      this.region = structure.region;
    }
    if (structure.afk_channel_id !== undefined) {
      this.afk_channel_id = structure.afk_channel_id;
    }
    if (structure.afk_timeout !== undefined) {
      this.afk_timeout = structure.afk_timeout;
    }
    if (structure.widget_channel_id !== undefined) {
      this.widget_channel_id = structure.widget_channel_id;
    }
    if (structure.widget_enabled !== undefined) {
      this.widget_enabled = structure.widget_enabled;
    }
    if (structure.verification_level !== undefined) {
      this.verification_level = structure.verification_level;
    }
    if (structure.default_message_notifications !== undefined) {
      this.default_message_notifications = structure.default_message_notifications;
    }
    if (structure.explicit_content_filter !== undefined) {
      this.explicit_content_filter = structure.explicit_content_filter;
    }
    if (structure.roles !== undefined) {
      this.roles = [];
      for (const role of structure.roles) {
        this.roles.push(role);
      }
    }
    if (structure.emojis !== undefined) {
      this.emojis = structure.emojis;
    }
    if (structure.features !== undefined) {
      this.features = structure.features;
    }
    if (structure.mfa_level !== undefined) {
      this.mfa_level = structure.mfa_level;
    }
    if (structure.application_id !== undefined) {
      this.application_id = structure.application_id;
    }
    if (structure.system_channel_id !== undefined) {
      this.system_channel_id = structure.system_channel_id;
    }
    if (structure.system_channel_flags !== undefined) {
      this.system_channel_flags = structure.system_channel_flags;
    }
    if (structure.rules_channel_id !== undefined) {
      this.rules_channel_id = structure.rules_channel_id;
    }
    if (structure.joined_at !== undefined) {
      this.joined_at = structure.joined_at;
    }
    if (structure.large !== undefined) {
      this.large = structure.large;
    }
    if (structure.unavailable !== undefined) {
      this.unavailable = structure.unavailable;
    }
    if (structure.member_count !== undefined) {
      this.member_count = structure.member_count;
    }
    if (structure.voice_states !== undefined) {
      this.voice_states = structure.voice_states;
    }
    if (structure.members !== undefined) {
      this.members = structure.members;
    }
    if (structure.channels !== undefined) {
      this.channels = structure.channels;
    }
    if (structure.threads !== undefined) {
      this.threads = structure.threads;
    }
    if (structure.presences !== undefined) {
      this.presences = structure.presences;
    }
    if (structure.max_presences !== undefined) {
      this.max_presences = structure.max_presences;
    }
    if (structure.max_members !== undefined) {
      this.max_members = structure.max_members;
    }
    if (structure.vanity_url_code !== undefined) {
      this.vanity_url_code = structure.vanity_url_code;
    }
    if (structure.description !== undefined) {
      this.description = structure.description;
    }
    if (structure.banner !== undefined) {
      this.banner = structure.banner;
    }
    if (structure.premium_tier !== undefined) {
      this.premium_tier = structure.premium_tier;
    }
    if (structure.preferred_locale !== undefined) {
      this.preferred_locale = structure.preferred_locale;
    }
    if (structure.public_updates_channel_id !== undefined) {
      this.public_updates_channel_id = structure.public_updates_channel_id;
    }
    if (structure.max_video_channel_users !== undefined) {
      this.max_video_channel_users = structure.max_video_channel_users;
    }
    if (structure.approximate_member_count !== undefined) {
      this.approximate_member_count = structure.approximate_member_count;
    }
    if (structure.approximate_presence_count !== undefined) {
      this.approximate_presence_count = structure.approximate_presence_count;
    }
    if (structure.welcome_screen !== undefined) {
      this.welcome_screen = structure.welcome_screen;
    }
    if (structure.nsfw_level !== undefined) {
      this.nsfw_level = structure.nsfw_level;
    }
    if (structure.stickers !== undefined) {
      this.stickers = structure.stickers;
    }
  }
}
