import { Application } from './Application';

export interface User {
  id: string,
  username: string,
  discriminator: string,
  avatar?: string,
  bot?: boolean,
  system?: boolean,
  mfa_enabled?: boolean,
  banner?: string,
  accent_color?: number,
  locale?: string,
  verified?: string,
  email?: string,
  flags?: number | Array<string>,
  premium_type?: number,
  public_flags?: number
}

export const UserFlag = [
  {
    name: 'DISCORD_EMPLOYEE',
    bit: 1 << 0
  },
  {
    name: 'PARTNERED_SERVER_OWNER',
    bit: 1 << 1
  },
  {
    name: 'HYPESQUAD_EVENTS',
    bit: 1 << 2
  },
  {
    name: 'BUG_HUNTER_LEVEL_1',
    bit: 1 << 3
  },
  {
    name: 'HOUSE_BRAVERY',
    bit: 1 << 6
  },
  {
    name: 'HOUSE_BRILLIANCE',
    bit: 1 << 7
  },
  {
    name: 'HOUSE_BALANCE',
    bit: 1 << 8
  },
  {
    name: 'EARLY_SUPPORTER',
    bit: 1 << 9
  },
  {
    name: 'TEAM_USER',
    bit: 1 << 10
  },
  {
    name: 'BUG_HUNTER_LEVEL_2',
    bit: 1 << 14
  },
  {
    name: 'VERIFIED_BOT',
    bit: 1 << 16
  },
  {
    name: 'EARLY_VERIFIED_BOT_DEVELOPER',
    bit: 1 << 17
  },
  {
    name: 'DISCORD_CERTIFIED_MODERATOR',
    bit: 1 << 18
  },
]

export enum PremiumTypes {
  NONE = 0,
  NITRO_CLASSIC = 1,
  NITRO = 2
}

export interface IntegrationObject {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  syncing: boolean;
  role_id?: string;
  enable_emoticons?: boolean;
  expire_behavior?: number;
  expire_grace_period: number;
  user: User;
  account: any;
  synced_at: number;
  subscriber_count: number;
  revoked: boolean;
  application: Application;
}

export interface ConnectionObject {
  id: string;
  name: string;
  type: string;
  revoked?: boolean;
  integrations: Array<IntegrationObject>;
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  visibility: number;
}

export enum VisibilityTypes { 
  NONE = 0,
  EVERYONE = 1
}
