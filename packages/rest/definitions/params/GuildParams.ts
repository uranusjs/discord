import { TypeChannel } from '../../../resources/Channel';

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
}


export interface ModifyGuildChannelPositions {
  id: string;
  position: number;
  lock_permissions: boolean;
  parent_id: string;
}