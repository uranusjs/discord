import { GuildMemberStructure } from '../../..';
import { ThreadChannel } from '../../../resources/Channel';

export interface ListActiveThreads {
  threads: Array<ThreadChannel>;
  members: Array<GuildMemberStructure>
}