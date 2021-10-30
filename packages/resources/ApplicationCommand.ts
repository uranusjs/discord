import { TypeChannel } from './Channel'

export const ApplicationCommandTypes = {
  CHAT_INPUT: 1,
  USER: 2,
  MESSAGE: 3
}


export const ApplicationCommandOptionType = {
  SUB_COMMAND: 1,
  SUB_COMMAND_GROUP: 2,
  STRING: 3,
  INTEGER: 4,
  BOOLEAN: 5,
  USER: 6,
  CHANNEL: 7,
  ROLE: 8,
  MENTIONABLE: 9,
  NUMBER: 10
}

export interface ApplicationCommandStructure {
  id: string;
  type: typeof ApplicationCommandTypes;
  application_ind: string;
  guild_id: string;
  name: string;
  description: string;
  options: Array<ApplicationCommandOptionStructure>;
  default_permission: boolean;
  version: string;

}

export interface ApplicationCommandOptionStructure {
  type: typeof ApplicationCommandOptionType;
  name: string;
  description: string;
  required: boolean;
  choices: Array<ApplicationCommandOptionChoiceStructure>;
  autocomplete: boolean;
  options: Array<ApplicationCommandOptionStructure>;
  channel_types: Array<typeof TypeChannel>;
}


export interface ApplicationCommandOptionChoiceStructure {
  name: string;
  value: string | number;
}