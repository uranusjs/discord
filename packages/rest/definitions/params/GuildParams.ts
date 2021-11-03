import { TypeChannel } from '../../../resources/Channel';
import { RoleStructure } from '../../../resources/Guild';

export interface ModifyGuild {
  name?: string;
  region?: string;
  verification_level: number;
  default_message_notifications?: number;
  explicit_content_filter?: number;
  afk_channel_id?: string;
  afk_timeout?: number;
  icon?: string;
  owner_id?: string;
  splash?: string;
  discovery_splash?: string;
  banner?: string;
  system_channel_id?: string;
  system_channel_flags?: number;
  rules_channel_id?: string;
  public_updates_channel_id?: string;
  preferred_locale?: string;
  features?: Array<string>;
  reason?: string;
}

export interface OverwriteObject {
  id?: string;
  type?: number;
  allow: string;
  deny: string;
}
export interface CreateGuildChannel {
  name?: string;
  type?: TypeChannel;
  topic?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  position?: number;
  permission_overwrites?: OverwriteObject;
  parent_id: string;
  nsfw: boolean;
  reason?: string;
}

export interface ModifyGuildMember {
  nick?: string;
  roles?: Array<RoleStructure>;
  mute?: boolean;
  deaf?: boolean;
  channel_id?: string;
  reason?: string;
}


export interface ModifyGuildChannelPositions {
  id: string;
  position: number;
  lock_permissions: boolean;
  parent_id: string;
  reason?: string;
}


export interface ModifyCurrentMember {
  nick?: string;
  reason?: string;
}


export interface CreateGuildBan {
  delete_message_days?: number;
  reason?: string;
}


export interface CreateGuildRole {
  name: string,
  permissions: string,
  color: number;
  hoist: boolean;
  icon?: any;
  unicode_emoji: string;
  mentionable: boolean;
}


export interface ModifyGuildRolePositions {
  id: string;
  position?: number;
}


export interface BeginGuildPrune {
  days: number;
  compute_prune_count: boolean;
  include_roles: Array<string>;
  reason?: string;
}


export interface GuildWidgetObject {
  enabled: boolean;
  channel_id: string;
}

export interface ModifyCurrentUserVoiceState {
  channel_id: string;
  suppress: boolean;
  request_to_speak_timestamp: string;
}



export interface ModifyUserVoiceState {
  channel_id: string;
  suppress: boolean;
  request_to_speak_timestamp: string;
}

