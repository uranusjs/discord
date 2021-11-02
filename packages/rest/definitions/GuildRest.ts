import { ChannelStructure, ThreadChannel } from '../../resources/Channel';
import {  GuildData, GuildMemberStructure, GuildPreviewStructure, GuildStructure, RoleStructure } from '../../resources/Guild';
import { ENDPOINT_ADD_GUILD_MEMBER_ROLE, ENDPOINT_GUILD, ENDPOINT_GUILD_GET_CHANNELS, ENDPOINT_GUILD_GET_MEMBER, ENDPOINT_GUILD_GET_MEMBER_LIST, ENDPOINT_GUILD_MODIFY_CURRENT_USER, ENDPOINT_GUILD_MODIFY_CURRENT_USER_NICK, ENDPOINT_GUILD_PREVIEW, ENDPOINT_GUILD_THREADS_ACTIVE, ENDPOINT_SEARCH_GUILD_MEMBERS } from '../endpoints/Guild';
import { RestManager } from '../Rest';
import { CreateGuildChannel, ModifyCurrentMember, ModifyGuild, ModifyGuildChannelPositions, ModifyGuildMember } from './params/GuildParams';




export class GuildRest extends GuildData {
  #rest: RestManager
  constructor(rest: RestManager, structure: GuildStructure) {
    super(structure);
    this.#rest = rest;
  }

  getGuildRest() {
    const endpoint = ENDPOINT_GUILD(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as GuildStructure
    })
  }

  getGuildPreviewRest() {
    const endpoint = ENDPOINT_GUILD_PREVIEW(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as GuildPreviewStructure
    })
  }

  modifyGuildRest(params: ModifyGuild) {
    const endpoint = ENDPOINT_GUILD(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params,
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      const d = rest.options.data as unknown as GuildStructure
      this.update_state(d)
      return rest.options.data as unknown as GuildStructure
    })
  }


  deleteGuildRest(params: ModifyGuild) {
    const endpoint = ENDPOINT_GUILD(this.id)
    return this.#rest.DELETE({
      endpoint: endpoint.details.endpoint,
      data: params,
    }, { is_require_token: true, }).then((_rest) => {
      return {}
    })
  }


  createGuildChannelRest(params: CreateGuildChannel) {
    const endpoint = ENDPOINT_GUILD_GET_CHANNELS(this.id)
    return this.#rest.POST({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      return rest.options.data as unknown as ChannelStructure
    })
  }


  getGuildChannelRest() {
    const endpoint = ENDPOINT_GUILD_GET_CHANNELS(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as ChannelStructure
    })
  }



  modifyChannelPositionsRest(params: ModifyGuildChannelPositions) {
    const endpoint = ENDPOINT_GUILD_GET_CHANNELS(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((_rest) => {
      return {}
    })
  }

  
  getListActiveThreadsRest() {
    const endpoint = ENDPOINT_GUILD_THREADS_ACTIVE(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as ThreadChannel
    })
  }

  getMemberRest(id: string) {
    const endpoint = ENDPOINT_GUILD_GET_MEMBER(this.id, id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as GuildMemberStructure
    })
  }

  getListMemberRest(limit?: number, after?: string) {
    const queryLimit = limit == null ? `limit=${limit}` : ''
    const queryafter = after == null ? `after=${after}` : ''
    const query: string[] = []

    query.push(queryLimit)
    query.push(queryafter)

    const endpoint = ENDPOINT_GUILD_GET_MEMBER_LIST(this.id, ``)
    endpoint.details.endpoint = `${endpoint.details.endpoint}?${query.join('&')}`

    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {

      query.shift();
      query.shift();

      return rest.options.data as unknown as GuildMemberStructure[]
    })
  }


  searchGuildMembersRest(query_search: string, limit?: number) {
    
    const querySearch = query_search == null ? `query=${query_search}` : ''
    const queryLimit = limit == null ? `limit=${limit}` : ''
    const query: string[] = []

    query.push(querySearch)
    query.push(queryLimit)

    const endpoint = ENDPOINT_SEARCH_GUILD_MEMBERS(this.id, ``)
    endpoint.details.endpoint = `${endpoint.details.endpoint}?${query.join('&')}`

    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {

      query.shift();
      query.shift();

      return rest.options.data as unknown as GuildMemberStructure[]
    })
  }


  modifyGuildMemberRest(member: GuildMemberStructure, params: ModifyGuildMember) {
    const endpoint = ENDPOINT_GUILD_GET_MEMBER(this.id, `${member.user?.id}`, '')
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      return rest.options.data as unknown as GuildMemberStructure
    })
  }


  modifyCurrentMemberRest(params: ModifyCurrentMember) {
    const endpoint = ENDPOINT_GUILD_MODIFY_CURRENT_USER(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      return rest.options.data as unknown as GuildMemberStructure
    })
  }



  modifyCurrentMemberNickRest(params: ModifyCurrentMember) {
    const endpoint = ENDPOINT_GUILD_MODIFY_CURRENT_USER_NICK(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      return rest.options.data as unknown as GuildMemberStructure
    })
  }



  addGuildMemberRoleRest(member: GuildMemberStructure, role: RoleStructure, reason?: '') {
    let status = false;
    if (reason !== undefined) {
      status = true;
    }
    const endpoint = ENDPOINT_ADD_GUILD_MEMBER_ROLE(this.id, `${member.user?.id}`, role.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: {
        reason: reason ?? ''
      }
    }, { is_require_token: true, is_require_data: status }).then((_rest) => {
      return {}
    })
  }

}