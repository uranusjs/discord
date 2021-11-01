
import { Application } from './Application';
import { ChannelStructure, ThreadStructure } from './Channel';
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
  publicUpdatesChannelID?: string;
  maxVideoChannelUsers?: number;
  approximateMemberCount?: number;
  approximatePresenceCount?: number;
  nsfwLevel?: number;
  premiumProgressBarEnabled?: boolean;
}

export interface GuildStructure {
  id?: string;
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
  channels?: Array<ChannelStructure>;
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
  stage_instances?: Array<StageInstanceStructure>;
  stickers?: Array<StickerStructure>;
  premium_progress_bar_enabled?: boolean;
}


export class DefaultGuildManager {
  roles?: Map<String, RoleStructure>;
  emojis?: Map<String, EmojiStructure> | undefined;
  stageInstances?: Map<String, StageInstanceStructure> | undefined;
  stickers?: Map<String, StickerStructure> | undefined;
  voiceStates?: Map<String, VoiceStateObject> | undefined;
  members?: Map<String, GuildMemberStructure> | undefined;
  channels?: Map<String, ChannelStructure> | undefined;
  threads?: Map<String, ThreadStructure> | undefined;
  presences?: Map<String, PresenceUpdateEventFields> | undefined;

  constructor() {
    this.members = new Map();
    this.emojis = new Map();
    this.stageInstances = new Map();
    this.stickers = new Map();
    this.voiceStates = new Map();
    this.channels = new Map();
    this.threads = new Map();
    this.presences = new Map();
  }
 }

export class GuildData extends DefaultGuildManager implements DefaultGuildStructure {
  id: string;
  name: string | undefined;
  icon: string | undefined;
  iconHash: string | undefined;
  splash: string | undefined;
  discoverySplash: string | undefined;
  owner: boolean | undefined;
  ownerID: string | undefined;
  permissions: string | undefined;
  region: string | undefined;
  afkChannelID: string | undefined;
  afkTimeout: number | undefined;
  widgetEnabled: boolean | undefined;
  widgetChannelID: string | undefined;
  verificationLevel: number | undefined;
  defaultMessageNotifications: number | undefined;
  explicitContentFilter: number | undefined;
  features: string[][] | undefined;
  mfaLevel: number | undefined;
  applicationID: string | undefined;
  systemChannelID: string | undefined;
  systemChannelFlags: number | undefined;
  rulesChannelID: string | undefined;
  joinedAt: string | undefined;
  large: boolean | undefined;
  unavailable: boolean | undefined;
  memberCount: number | undefined;
  maxPresences: number | undefined;
  maxMembers: number | undefined;
  vanityUrlCode: string | undefined;
  description: string | undefined;
  banner: string | undefined;
  premiumTier: number | undefined;
  preferredLocale: string | undefined;
  publicUpdatesChannelID: string | undefined;
  maxVideoChannelUsers: number | undefined;
  approximateMemberCount: number | undefined;
  approximatePresenceCount: number | undefined;
  welcomeScreen: WelcomeScreenChannelStructure | undefined;
  nsfwLevel: number | undefined;
  premiumProgressBarEnabled: boolean | undefined;
  constructor(structure: GuildStructure) {
    super();
    if (structure?.id !== undefined) {
      this.id = structure.id;
    } else {
      this.id = '';
    }
    if (structure?.afk_channel_id !== undefined) {
      this.afkChannelID = structure.afk_channel_id;
    }
    if (structure?.afk_timeout !== undefined) {
      this.afkTimeout = structure.afk_timeout;
    }
    if (structure?.application_id !== undefined) {
      this.applicationID = structure.application_id;
    }
    if (structure?.approximate_member_count !== undefined) {
      this.approximateMemberCount = structure.approximate_member_count;
    }
    if (structure?.approximate_presence_count !== undefined) {
      this.approximatePresenceCount = structure.approximate_presence_count;
    }
    if (structure?.banner !== undefined) {
      this.banner = structure.banner;
    }
    if (structure?.channels !== undefined) {
      for (const channel of structure.channels) {
        this.channels?.set(channel.id, channel);
      }
    }
    if (structure?.default_message_notifications !== undefined) {
      this.defaultMessageNotifications = structure.default_message_notifications;
    }
    if (structure?.description !== undefined) {
      this.description = structure.description;
    }
    if (structure?.discovery_splash !== undefined) {
      this.discoverySplash = structure.discovery_splash;
    }
    if (structure?.emojis !== undefined) {
      for (const emoji of structure.emojis) {
        this.emojis?.set(emoji.id, emoji);
      }
    }
    if (structure?.explicit_content_filter !== undefined) {
      this.explicitContentFilter = structure.explicit_content_filter;
    }
    if (structure?.features !== undefined) {
      this.features = structure.features;
    }
    if (structure?.icon !== undefined) {
      this.icon = structure.icon;
    }
    if (structure?.icon_hash !== undefined) {
      this.iconHash = structure.icon_hash;
    }
    if (structure?.joined_at !== undefined) {
      this.joinedAt = structure.joined_at;
    }
    if (structure?.large !== undefined) {
      this.large = structure.large;
    }
    if (structure?.max_members !== undefined) {
      this.maxMembers = structure.max_members;
    }
    if (structure?.max_presences !== undefined) {
      this.maxPresences = structure.max_presences;
    }
    if (structure?.max_video_channel_users !== undefined) {
      this.maxVideoChannelUsers = structure.max_video_channel_users;
    }
    if (structure?.member_count !== undefined) {
      this.memberCount = structure.member_count;
    }
    if (structure?.members !== undefined) {
      for (const member of structure.members) {
        this.members?.set(member.user!!.id, member);
      }
    }
    if (structure?.mfa_level !== undefined) {
      this.mfaLevel = structure.mfa_level;
    }
    if (structure?.name !== undefined) {
      this.name = structure.name;
    }
    if (structure?.nsfw_level !== undefined) {
      this.nsfwLevel = structure.nsfw_level;
    }
    if (structure?.owner !== undefined) {
      this.owner = structure.owner;
    }
    if (structure?.owner_id !== undefined) {
      this.ownerID = structure.owner_id;
    }
    if (structure?.permissions !== undefined) {
      this.permissions = structure.permissions;
    }
    if (structure?.preferred_locale !== undefined) {
      this.preferredLocale = structure.preferred_locale;
    }
    if (structure?.premium_progress_bar_enabled !== undefined) {
      this.premiumProgressBarEnabled = structure.premium_progress_bar_enabled;
    }
    if (structure?.premium_tier !== undefined) {
      this.premiumTier = structure.premium_tier;
    }
    if (structure?.presences !== undefined) {
      for (const presence of structure.presences) {
        this.presences?.set(presence.user.id, presence);
      }
    }
    if (structure?.public_updates_channel_id !== undefined) {
      this.publicUpdatesChannelID = structure.public_updates_channel_id;
    }
    if (structure?.region !== undefined) {
      this.region = structure.region;
    }
    if (structure?.roles !== undefined) {
      for (const role of structure.roles) {
        this.roles?.set(role.id, role);
      }
    }
    if (structure?.rules_channel_id !== undefined) {
      this.rulesChannelID = structure.rules_channel_id;
    }
    if (structure?.splash !== undefined) {
      this.splash = structure.splash;
    }
    if (structure?.stage_instances !== undefined) {
      for (const stage of structure.stage_instances) {
        this.stageInstances?.set(stage.id, stage);
      }
    }
    if (structure?.stickers !== undefined) {
      for (const sticker of structure.stickers) {
        this.stickers?.set(sticker.id, sticker);
      }
    }
    if (structure?.system_channel_flags !== undefined) {
      this.systemChannelFlags = structure.system_channel_flags;
    }
    if (structure?.system_channel_id !== undefined) {
      this.systemChannelID = structure.system_channel_id;
    }
    if (structure?.threads !== undefined) {
      for (const thread of structure.threads) {
        this.threads?.set(thread.id, thread);
      }
    }
    if (structure?.unavailable !== undefined) {
      this.unavailable = structure.unavailable;
    }
    if (structure?.vanity_url_code !== undefined) {
      this.vanityUrlCode = structure.vanity_url_code;
    }
    if (structure?.verification_level !== undefined) {
      this.verificationLevel = structure.verification_level;
    }
    if (structure?.voice_states !== undefined) {
      for (const voiceState of structure?.voice_states) {
        this.voiceStates?.set(voiceState.user_id, voiceState);
      }
    }
    if (structure?.welcome_screen !== undefined) {
      this.welcomeScreen = structure.welcome_screen;
    }
    if (structure?.widget_channel_id !== undefined) {
      this.widgetChannelID = structure.widget_channel_id;
    }
    if (structure?.widget_enabled !== undefined) {
      this.widgetEnabled = structure.widget_enabled;
    }
  }

  update_state(structure: GuildStructure) {
    if (structure?.afk_channel_id !== undefined) {
      this.afkChannelID = structure.afk_channel_id;
    }
    if (structure?.afk_timeout !== undefined) {
      this.afkTimeout = structure.afk_timeout;
    }
    if (structure?.application_id !== undefined) {
      this.applicationID = structure.application_id;
    }
    if (structure?.approximate_member_count !== undefined) {
      this.approximateMemberCount = structure.approximate_member_count;
    }
    if (structure?.approximate_presence_count !== undefined) {
      this.approximatePresenceCount = structure.approximate_presence_count;
    }
    if (structure?.banner !== undefined) {
      this.banner = structure.banner;
    }
    if (structure?.channels !== undefined) {
      for (const channel of structure.channels) {
        this.channels?.set(channel.id, channel);
      }
    }
    if (structure?.default_message_notifications !== undefined) {
      this.defaultMessageNotifications = structure.default_message_notifications;
    }
    if (structure?.description !== undefined) {
      this.description = structure.description;
    }
    if (structure?.discovery_splash !== undefined) {
      this.discoverySplash = structure.discovery_splash;
    }
    if (structure?.emojis !== undefined) {
      for (const emoji of structure.emojis) {
        this.emojis?.set(emoji.id, emoji);
      }
    }
    if (structure?.explicit_content_filter !== undefined) {
      this.explicitContentFilter = structure.explicit_content_filter;
    }
    if (structure?.features !== undefined) {
      this.features = structure.features;
    }
    if (structure?.icon !== undefined) {
      this.icon = structure.icon;
    }
    if (structure?.icon_hash !== undefined) {
      this.iconHash = structure.icon_hash;
    }
    if (structure?.joined_at !== undefined) {
      this.joinedAt = structure.joined_at;
    }
    if (structure?.large !== undefined) {
      this.large = structure.large;
    }
    if (structure?.max_members !== undefined) {
      this.maxMembers = structure.max_members;
    }
    if (structure?.max_presences !== undefined) {
      this.maxPresences = structure.max_presences;
    }
    if (structure?.max_video_channel_users !== undefined) {
      this.maxVideoChannelUsers = structure.max_video_channel_users;
    }
    if (structure?.member_count !== undefined) {
      this.memberCount = structure.member_count;
    }
    if (structure?.members !== undefined) {
      for (const member of structure.members) {
        this.members?.set(member.user!!.id, member);
      }
    }
    if (structure?.mfa_level !== undefined) {
      this.mfaLevel = structure.mfa_level;
    }
    if (structure?.name !== undefined) {
      this.name = structure.name;
    }
    if (structure?.nsfw_level !== undefined) {
      this.nsfwLevel = structure.nsfw_level;
    }
    if (structure?.owner !== undefined) {
      this.owner = structure.owner;
    }
    if (structure?.owner_id !== undefined) {
      this.ownerID = structure.owner_id;
    }
    if (structure?.permissions !== undefined) {
      this.permissions = structure.permissions;
    }
    if (structure?.preferred_locale !== undefined) {
      this.preferredLocale = structure.preferred_locale;
    }
    if (structure?.premium_progress_bar_enabled !== undefined) {
      this.premiumProgressBarEnabled = structure.premium_progress_bar_enabled;
    }
    if (structure?.premium_tier !== undefined) {
      this.premiumTier = structure.premium_tier;
    }
    if (structure?.presences !== undefined) {
      for (const presence of structure.presences) {
        this.presences?.set(presence.user.id, presence);
      }
    }
    if (structure?.public_updates_channel_id !== undefined) {
      this.publicUpdatesChannelID = structure.public_updates_channel_id;
    }
    if (structure?.region !== undefined) {
      this.region = structure.region;
    }
    if (structure?.roles !== undefined) {
      for (const role of structure.roles) {
        this.roles?.set(role.id, role);
      }
    }
    if (structure?.rules_channel_id !== undefined) {
      this.rulesChannelID = structure.rules_channel_id;
    }
    if (structure?.splash !== undefined) {
      this.splash = structure.splash;
    }
    if (structure?.stage_instances !== undefined) {
      for (const stage of structure.stage_instances) {
        this.stageInstances?.set(stage.id, stage);
      }
    }
    if (structure?.stickers !== undefined) {
      for (const sticker of structure.stickers) {
        this.stickers?.set(sticker.id, sticker);
      }
    }
    if (structure?.system_channel_flags !== undefined) {
      this.systemChannelFlags = structure.system_channel_flags;
    }
    if (structure?.system_channel_id !== undefined) {
      this.systemChannelID = structure.system_channel_id;
    }
    if (structure?.threads !== undefined) {
      for (const thread of structure.threads) {
        this.threads?.set(thread.id, thread);
      }
    }
    if (structure?.unavailable !== undefined) {
      this.unavailable = structure.unavailable;
    }
    if (structure?.vanity_url_code !== undefined) {
      this.vanityUrlCode = structure.vanity_url_code;
    }
    if (structure?.verification_level !== undefined) {
      this.verificationLevel = structure.verification_level;
    }
    if (structure?.voice_states !== undefined) {
      for (const voiceState of structure?.voice_states) {
        this.voiceStates?.set(voiceState.user_id, voiceState);
      }
    }
    if (structure?.welcome_screen !== undefined) {
      this.welcomeScreen = structure.welcome_screen;
    }
    if (structure?.widget_channel_id !== undefined) {
      this.widgetChannelID = structure.widget_channel_id;
    }
    if (structure?.widget_enabled !== undefined) {
      this.widgetEnabled = structure.widget_enabled;
    }
  }
}





