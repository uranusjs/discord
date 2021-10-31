import { Manager } from '../manager/MapManager';
import { GuildRest } from '../rest/definitions/GuildRest';
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


export interface DefaultGuildStructure {
  id: string;
  name?: string;
  icon?: string;
  iconHash?: string;
  splash?: string;
  discoverySplash?: string;
  owner?: boolean;
  ownerID?: string;
  permissions?: string;
  region?: string;
  afkChannelID?: string;
  afkTimeout?: number;
  widgetEnabled?: boolean;
  widgetChannelID?: string;
  verificationLevel?: number;
  defaultMessageNotifications?: number;
  explicitContentFilter?: number;
  features?: Array<typeof GuildFeatures>;
  mfaLevel?: number;
  applicationID?: string;
  systemChannelID?: string;
  systemChannelFlags?: number;
  rulesChannelID?: string;
  joinedAt?: string;
  large?: boolean;
  unavailable?: boolean;
  memberCount?: number;
  maxPresences?: number;
  maxMembers?: number;
  vanityUrlCode?: string;
  description?: string;
  banner?: string;
  premiumTier?: number;
  preferredLocale?: string;
  publicUpdatesChannelId?: string;
  maxVideoChannelUsers?: number;
  approximateMemberCount?: number;
  approximatePresenceCount?: number;
  nsfwLevel?: number;
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


export class DefaultGuildManager {
  roles?: Map<String, RoleStructure>;
  emojis?: Map<String, EmojiStructure> | undefined;
  stageInstancs?: Map<String, StageInstanceStructure> | undefined;
  stickers?: Map<String, StickerStructure> | undefined;
  voiceStates?: Map<String, VoiceStateObject> | undefined;
  members?: Map<String, GuildMemberStructure> | undefined;
  channels?: Map<String, TypeChannel> | undefined;
  threads?: Map<String, ThreadStructure> | undefined;
  presences?: Map<String, PresenceUpdateEventFields> | undefined;

  constructor() {
    this.members = new Map();
    this.emojis = new Map();
    this.stageInstancs = new Map();
    this.stickers = new Map();
    this.voiceStates = new Map();
    this.channels = new Map();
    this.threads = new Map();
    this.presences = new Map();
  }
 }

export class GuildData extends DefaultGuildManager implements DefaultGuildStructure {
  id: string;
  name?: string | undefined;
  icon?: string | undefined;
  iconHash?: string | undefined;
  splash?: string | undefined;
  discoverySplash?: string | undefined;
  owner?: boolean | undefined;
  ownerID?: string | undefined;
  permissions?: string | undefined;
  region?: string | undefined;
  afkChannelID?: string | undefined;
  afkTimeout?: number | undefined;
  widgetEnabled?: boolean | undefined;
  widgetChannelID?: string | undefined;
  verificationLevel?: number | undefined;
  defaultMessageNotifications?: number | undefined;
  explicitContentFilter?: number | undefined;
  features?: string[][] | undefined;
  mfaLevel?: number | undefined;
  applicationID?: string | undefined;
  systemChannelID?: string | undefined;
  systemChannelFlags?: number | undefined;
  rulesChannelID?: string | undefined;
  joinedAt?: string | undefined;
  large?: boolean | undefined;
  unavailable?: boolean | undefined;
  memberCount?: number | undefined;
  maxPresences?: number | undefined;
  maxMembers?: number | undefined;
  vanityUrlCode?: string | undefined;
  description?: string | undefined;
  banner?: string | undefined;
  premiumTier?: number | undefined;
  preferredLocale?: string | undefined;
  publicUpdatesChannelId?: string | undefined;
  maxVideoChannelUsers?: number | undefined;
  approximateMemberCount?: number | undefined;
  approximatePresenceCount?: number | undefined;
  welcomeScreen?: WelcomeScreenChannelStructure | undefined;
  nsfwLevel?: number | undefined;
  constructor(structure: GuildStructure) {
    super();
    this.id = structure.id;
  }
}




export class Guild extends GuildRest { }
