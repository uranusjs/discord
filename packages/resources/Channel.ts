import { EventEmitter } from 'stream'
import { ChannelRest } from '../rest/definitions/ChannelRest'
import { RestOptions } from '../rest/definitions/RestOptions'

export interface RecipientsInterface {
  username?: string;
  discriminator?: string;
  id?: string;
  avatar?: string;
}

export enum TypeChannel {
  GuildText = 0,
  DM = 1,
  GuildVoice = 2,
  GroupDM = 3,
  GuildCategory = 4,
  GuildNews = 5,
  GuildStore = 6,
  GuildNewsThread = 10,
  GuildPublicThread = 11,
  GuildPrivateThread = 12,
  GuildStageVoice = 13
}


export type VideoQualityModes = {
  Auto: 1,
  Full: 2,
}

export interface ChannelStructure extends ChannelRest {
  id: string;
  type: TypeChannel;
  guild_id?: string;
  position?: number;
  permission_overwrites?: Array<any>;
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: Array<RecipientsInterface>;
  icon?: string;
  owner_id?: string;
  application_id?: string;
  parent_id?: string;
  last_pin_timestamp?: number;
  rtc_region?: string;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: any;
  member?: any;
  default_auto_archive_duration?: number;
  permissions?: string;
}


export class TextChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.guild_id !== undefined) {
      this.guild_id = structure.guild_id;
    }
    if (structure.type !== undefined) {
      this.type = TypeChannel.GuildText;
    }
    if (structure.position !== undefined) {
      this.position = structure.position;
    }
    if (structure.permission_overwrites !== undefined) {
      this.permission_overwrites = structure.permission_overwrites;
    }
    if (structure.rate_limit_per_user !== undefined) {
      this.rate_limit_per_user = structure.rate_limit_per_user;
    }
    if (structure.nsfw !== undefined) {
      this.nsfw = structure.nsfw;
    }
    if (structure.topic !== undefined) {
      this.topic = structure.topic;
    }
    if (structure.last_message_id !== undefined) {
      this.last_message_id = structure.last_message_id;
    }
    if (structure.parent_id !== undefined) {
      this.parent_id = structure.parent_id;
    }
    if (structure.default_auto_archive_duration !== undefined) {
      this.default_auto_archive_duration = structure.default_auto_archive_duration;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}



export class NewsChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.guild_id !== undefined) {
      this.guild_id = structure.guild_id;
    }
    if (structure.type !== undefined) {
      this.type = TypeChannel.GuildNews;
    }
    if (structure.position !== undefined) {
      this.position = structure.position;
    }
    if (structure.permission_overwrites !== undefined) {
      this.permission_overwrites = structure.permission_overwrites;
    }
    if (structure.rate_limit_per_user !== undefined) {
      this.rate_limit_per_user = structure.rate_limit_per_user;
    }
    if (structure.nsfw !== undefined) {
      this.nsfw = structure.nsfw;
    }
    if (structure.topic !== undefined) {
      this.topic = structure.topic;
    }
    if (structure.last_message_id !== undefined) {
      this.last_message_id = structure.last_message_id;
    }
    if (structure.parent_id !== undefined) {
      this.parent_id = structure.parent_id;
    }
    if (structure.default_auto_archive_duration !== undefined) {
      this.default_auto_archive_duration = structure.default_auto_archive_duration;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}


export class VoiceChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.guild_id !== undefined) {
      this.guild_id = structure.guild_id;
    }
    if (structure.type !== undefined) {
      this.type = TypeChannel.GuildVoice;
    }
    if (structure.position !== undefined) {
      this.position = structure.position;
    }
    if (structure.nsfw !== undefined) {
      this.nsfw = structure.nsfw;
    }
    if (structure.permission_overwrites !== undefined) {
      this.permission_overwrites = structure.permission_overwrites;
    }
    if (structure.bitrate !== undefined) {
      this.bitrate = structure.bitrate;
    }
    if (structure.user_limit !== undefined) {
      this.user_limit = structure.user_limit;
    }
    if (structure.parent_id !== undefined) {
      this.parent_id = structure.parent_id;
    }
    if (structure.rtc_region !== undefined) {
      this.rtc_region = structure.rtc_region;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}


export class DMChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.last_message_id !== undefined) {
      this.last_message_id = structure.last_message_id;
    }
    if (structure.type !== undefined) {
      this.type = TypeChannel.DM;
    }
    if (structure.recipients !== undefined) {
      this.recipients = structure.recipients;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}


export class GroupChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.last_message_id !== undefined) {
      this.last_message_id = structure.last_message_id;
    }
    if (structure.name !== undefined) {
      this.name = structure.name;
    }
    if (structure.icon !== undefined) {
      this.icon = structure.icon;
    }
    if (structure.type !== undefined) {
      this.type = TypeChannel.GroupDM;
    }
    if (structure.recipients !== undefined) {
      this.recipients = structure.recipients;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}


export class CategoryChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.permission_overwrites !== undefined) {
      this.permission_overwrites = structure.permission_overwrites;
    }
    if (structure.name !== undefined) {
      this.name = structure.name;
    }
    if (structure.parent_id !== undefined) {
      this.parent_id = structure.parent_id;
    }
    if (structure.nsfw !== undefined) {
      this.nsfw = structure.nsfw;
    }
    if (structure.position !== undefined) {
      this.position = structure.position;
    }
    if (structure.guild_id !== undefined) {
      this.guild_id = structure.guild_id;
    }
    if (structure.type !== undefined) {
      this.type = structure.type;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}

export class StoreChannel extends EventEmitter implements ChannelStructure {
  id: string
  type!: TypeChannel
  guild_id?: string | undefined
  position?: number | undefined
  permission_overwrites?: any[] | undefined
  name?: string | undefined
  topic?: string | undefined
  nsfw?: boolean | undefined
  last_message_id?: string | undefined
  bitrate?: number | undefined
  user_limit?: number | undefined
  rate_limit_per_user?: number | undefined
  recipients?: RecipientsInterface[] | undefined
  icon?: string | undefined
  owner_id?: string | undefined
  application_id?: string | undefined
  parent_id?: string | undefined
  last_pin_timestamp?: number | undefined
  rtc_region?: string | undefined
  video_quality_mode?: number | undefined
  message_count?: number | undefined
  member_count?: number | undefined
  thread_metadata?: any
  member?: any
  default_auto_archive_duration?: number | undefined
  permissions?: string | undefined
  rest: ChannelRest
  options_rest: RestOptions
  constructor(rest: ChannelRest, structure: ChannelStructure, options_rest: RestOptions) {
    super();
    this.id = structure.id;
    if (structure.type !== undefined) {
      this.type = TypeChannel.GuildStore
    }
    if (structure.permission_overwrites !== undefined) {
      this.permission_overwrites = structure.permission_overwrites;
    }
    if (structure.name !== undefined) {
      this.name = structure.name;
    }
    if (structure.parent_id !== undefined) {
      this.parent_id = structure.parent_id;
    }
    if (structure.nsfw !== undefined) {
      this.nsfw = structure.nsfw;
    }
    if (structure.position !== undefined) {
      this.position = structure.position;
    }
    if (structure.guild_id !== undefined) {
      this.guild_id = structure.guild_id;
    }
    if (structure.permission_overwrites !== undefined) {
      this.permission_overwrites = structure.permission_overwrites;
    }
    this.rest = rest;
    this.options_rest = options_rest;
  }
}


export interface ThreadStructure extends ChannelStructure {
  thread_metadata?: ThreadMetadata;
}

export interface ThreadMetadata extends ChannelStructure {
  archived?: boolean;
  auto_archived_duration?: number;
  archive_timestamp?: number;
  locked?: boolean;
}

export class ThreadChannel extends TextChannel {
  constructor(rest: ChannelRest, structure: ThreadStructure, options_rest: RestOptions) {
    super(rest, structure, options_rest);
    this.id = structure.id;
    if (structure.guild_id !== undefined) {
      this.guild_id = structure.guild_id;
    }
    if (structure.parent_id !== undefined) {
      this.parent_id = structure.parent_id;
    }
    if (structure.owner_id !== undefined) {
      this.owner_id = structure.parent_id;
    }
    if (structure.name !== undefined) {
      this.name = structure.name;
    }
    if (structure.type !== undefined) {
      this.type = structure.type;
    }
    if (structure.last_message_id !== undefined) {
      this.last_message_id !== structure.last_message_id;
    }
    if (structure.message_count !== undefined) {
      this.message_count = structure.message_count;
    }
    if (structure.member_count !== undefined) {
      this.member_count = structure.member_count;
    }
    if (structure.thread_metadata !== undefined) {
      this.thread_metadata = structure.thread_metadata;
    }
  }
}