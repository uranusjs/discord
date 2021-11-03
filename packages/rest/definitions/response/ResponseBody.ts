import { GuildMemberStructure } from '../../..';
import { ThreadChannel } from '../../../resources/Channel';

export interface ListActiveThreads {
  threads: Array<ThreadChannel>;
  members: Array<GuildMemberStructure>
}


export interface VoiceRegionResponse {
  id: string;
  name: string;
  custom: boolean;
  deprecated: boolean;
  optimal: boolean;
}


export interface VanityResponse {
  code: string;
  uses: number;
}