import { Team } from './Team';
import { User } from './User';

export type Application = {
  id:  string,
  name: string,
  icon?: string,
  description: string,
  rpc_origions: Array<string>,
  bot_public: boolean,
  bot_require_code_grant: boolean,
  terms_of_service_url?: string,
  privacy_policy_url?: string,
  owner?: User,
  summary: string,
  verify_key: string,
  team: Team,
  guild_id?: string,
  primary_sku_id?: string,
  slug?: string,
  cover_image?: string,
  flags?: number,
}


export enum ApplicationFlags {
  GatewayPresence = 1 << 12,
  GatewayPresenceLimited = 1 << 13,
  GatewayGuildMembers = 1 << 14,
  GatewayGuildMembersLimited = 1 << 15,
  VerificationPendingGuildLimit = 1 << 16,
  Embedded = 1 << 17
}

export const ApplicationFlagsArray = [
  { name: 'GATEWAY_PRESENCE', bit: 1 << 12 },
  { name: 'GATEWAY_PRESENCE_LIMITED', bit: 1 << 13 },
  { name: 'GATEWAY_GUILD_MEMBERS', bit: 1 << 14 },
  { name: 'GATEWAY_GUILD_MEMBERS_LIMITED', bit: 1 << 15 },
  { name: 'VERIFICATION_PENDING_GUILD_LIMIT', bit: 1 << 16 },
  { name: 'EMBEDDED', bit: 1 << 17 },
  { name: 'GATEWAY_MESSAGE_CONTENT', bit: 1 << 18 },
  { name: 'GATEWAY_MESSAGE_CONTENT_LIMITED', bit: 1 << 19 },
]
