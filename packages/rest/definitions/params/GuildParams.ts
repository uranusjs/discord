import { TypeChannel } from '../../../resources/Channel';
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