import { User } from './User';

export enum MemberShipState {
  invite = 1,
  accepted = 2
};

export type MemberTeam = {
  membership_state: number,
  permissions: Array<string>,
  team_id: string,
  user: User
};

export type Team = {
  icon?: string,
  id: string,
  members: Array<MemberTeam>
};