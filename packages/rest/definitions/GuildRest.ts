import { ChannelStructure, ThreadChannel } from '../../resources/Channel';
import { BanStructure, GuildData, GuildMemberStructure, GuildPreviewStructure, GuildStructure, IntegrationStructure, RoleStructure, WelcomeScreenChannelStructure } from '../../resources/Guild';
import { User } from '../../resources/User';
import { ENDPOINT_ADD_GUILD_MEMBER_ROLE, ENDPOINT_BEGIN_GUILD_PRUNE, ENDPOINT_DELETE_GUILD_INTEGRATION, ENDPOINT_GET_GUILD_BAN, ENDPOINT_GET_GUILD_BANS, ENDPOINT_GET_GUILD_INTEGRATION, ENDPOINT_GET_GUILD_PRUNE_COUNT, ENDPOINT_GET_GUILD_ROLES, ENDPOINT_GET_GUILD_VANITY_URL, ENDPOINT_GET_GUILD_VOICE_REGIONS, ENDPOINT_GET_GUILD_WELCOME_SCREEN, ENDPOINT_GET_GUILD_WIDGET, ENDPOINT_GUILD, ENDPOINT_GUILD_GET_CHANNELS, ENDPOINT_GUILD_GET_MEMBER, ENDPOINT_GUILD_GET_MEMBER_LIST, ENDPOINT_GUILD_MODIFY_CURRENT_USER, ENDPOINT_GUILD_MODIFY_CURRENT_USER_NICK, ENDPOINT_GUILD_PREVIEW, ENDPOINT_GUILD_THREADS_ACTIVE, ENDPOINT_MODIFY_GUILD_ROLE, ENDPOINT_MODIFY_GUILD_WELCOME_SCREEN, ENDPOINT_MODIFY_USER_VOICE_STATE, ENDPOINT_SEARCH_GUILD_MEMBERS } from '../endpoints/Guild';
import { RestManager } from '../Rest';
import { BeginGuildPrune, CreateGuildBan, CreateGuildChannel, CreateGuildRole, GuildWidgetObject, ModifyCurrentMember, ModifyGuild, ModifyGuildChannelPositions, ModifyGuildMember, ModifyGuildRolePositions, ModifyUserVoiceState } from './params/GuildParams';
import { VanityResponse, VoiceRegionResponse } from './response/ResponseBody';




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

    if (!(queryLimit == '')) {
      query.push(queryLimit)
    }
    if (!(queryafter == '')) {
      query.push(queryafter)
    }

    const endpoint = ENDPOINT_GUILD_GET_MEMBER_LIST(this.id, ``)
    endpoint.details.endpoint = `${endpoint.details.endpoint}?${query.join('&')}`

    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {

      if (!(query.length == 0)) {
        if (query.length == 2) {
          query.shift();
          query.shift();
        }
      }

      return rest.options.data as unknown as GuildMemberStructure[]
    })
  }


  searchGuildMembersRest(query_search: string, limit?: number) {

    const querySearch = query_search == null ? `query=${query_search}` : ''
    const queryLimit = limit == null ? `limit=${limit}` : ''
    const query: string[] = []


    if (!(querySearch == '')) {
      query.push(querySearch)
    }

    if (!(queryLimit == '')) {
      query.push(queryLimit)
    }

    const endpoint = ENDPOINT_SEARCH_GUILD_MEMBERS(this.id, ``)
    endpoint.details.endpoint = `${endpoint.details.endpoint}?${query.join('&')}`

    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {

      if (!(query.length == 0)) {
        if (query.length == 2) {
          query.shift();
          query.shift();
        }
      }

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
    const endpoint = ENDPOINT_ADD_GUILD_MEMBER_ROLE(this.id, `${member.user?.id}`, role.id)
    return this.#rest.PUT({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true, reason: reason }).then((rest) => {
      return rest.options.data as unknown as RoleStructure
    })
  }



  removeGuildMemberRoleRest(member: GuildMemberStructure, role: RoleStructure, reason?: '') {
    const endpoint = ENDPOINT_ADD_GUILD_MEMBER_ROLE(this.id, `${member.user?.id}`, role.id)
    return this.#rest.DELETE({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true, reason: reason }).then((_rest) => {
      return {}
    })
  }


  removeGuildMemberRest(member: GuildMemberStructure, reason?: '') {
    const endpoint = ENDPOINT_GUILD_GET_MEMBER(this.id, `${member.user?.id}`)
    return this.#rest.DELETE({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true, reason: reason }).then((_rest) => {
      return {}
    })
  }

  getGuildBansRest() {
    const endpoint = ENDPOINT_GET_GUILD_BANS(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as BanStructure[]
    })
  }


  getGuildBanRest(user: User) {
    const endpoint = ENDPOINT_GET_GUILD_BAN(this.id, user.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as BanStructure
    })
  }


  createGuildBanRest(user: User, params: CreateGuildBan) {
    const endpoint = ENDPOINT_GET_GUILD_BAN(this.id, user.id)
    return this.#rest.PUT({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: params.reason }).then((rest) => {
      return rest.options.data as unknown as BanStructure[]
    })
  }


  removeGuildBanRest(member: GuildMemberStructure, reason?: '') {
    const endpoint = ENDPOINT_GET_GUILD_BAN(this.id, `${member.user?.id}`)
    return this.#rest.DELETE({
      endpoint: endpoint.details.endpoint,
    }, { is_require_token: true, reason: reason }).then((_rest) => {
      return {}
    })
  }


  getGuildRolesRest() {
    const endpoint = ENDPOINT_GET_GUILD_ROLES(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true, }).then((rest) => {
      return rest.options.data as unknown as RoleStructure[]
    })
  }

  createGuildRoleRest(params: CreateGuildRole, reason?: string) {
    const endpoint = ENDPOINT_GET_GUILD_ROLES(this.id)
    return this.#rest.POST({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: reason }).then((rest) => {
      return rest.options.data as unknown as RoleStructure
    })
  }



  modifyGuildRolePositionsRest(params: ModifyGuildRolePositions, reason?: string) {
    const endpoint = ENDPOINT_GET_GUILD_ROLES(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: reason }).then((rest) => {
      return rest.options.data as unknown as RoleStructure
    })
  }

  modifyGuildRoleRest(param: string | RoleStructure, params: ModifyGuildRolePositions, reason?: string) {
    const endpoint = ENDPOINT_MODIFY_GUILD_ROLE(this.id, typeof param == 'string' ? param : param?.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: reason }).then((rest) => {
      return rest.options.data as unknown as RoleStructure
    })
  }


  deleteGuildRoleRest(param: string | RoleStructure, reason?: string) {
    const endpoint = ENDPOINT_MODIFY_GUILD_ROLE(this.id, typeof param == 'string' ? param : param?.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true, reason: reason }).then((_rest) => {
      return {}
    })
  }

  getGuildPruneCountRest(days: number, roles: Array<string>) {
    const query = [];

    if (days !== undefined) {
      query.push({ a: 'days', b: days })
    }
    if (roles !== undefined) {
      query.push({ a: 'roles', b: days })
    }

    const query_toString = query.map((callback) => `${callback.a}=${callback.b}`).join('&')
    const endpoint = ENDPOINT_GET_GUILD_PRUNE_COUNT(this.id, `?${query_toString}`)
    endpoint.details.endpoint = `${endpoint.details.endpoint}${endpoint.details.options}`
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data
    })
  }


  beginGuildPruneRest(params: BeginGuildPrune, reason?: string) {
    const endpoint = ENDPOINT_BEGIN_GUILD_PRUNE(this.id)
    return this.#rest.POST({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: reason }).then((rest) => {
      return rest.options.data
    })
  }

  getGuildVoiceRegionsRest() {
    const endpoint = ENDPOINT_GET_GUILD_VOICE_REGIONS(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as VoiceRegionResponse[]
    })
  }

  getGuildIntegrationsRest() {
    const endpoint = ENDPOINT_GET_GUILD_INTEGRATION(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as IntegrationStructure
    })
  }

  deleteGuildIntegrationRest(param: string | IntegrationStructure, reason?: string) {
    const endpoint = ENDPOINT_DELETE_GUILD_INTEGRATION(this.id, typeof param == 'string' ? param : param.id)
    return this.#rest.DELETE({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true, reason: reason }).then((_rest) => {
      return {}
    })
  }

  modifyGuildWidgetRest(params: GuildWidgetObject, reason?: string) {
    const endpoint = ENDPOINT_GET_GUILD_WIDGET(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: reason }).then((rest) => {
      return rest.options.data as unknown as GuildWidgetObject
    })
  }


  getGuildVanityURLRest() {
    const endpoint = ENDPOINT_GET_GUILD_VANITY_URL(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as VanityResponse
    })
  }

  getGuildWelcomeScreenRest() {
    const endpoint = ENDPOINT_GET_GUILD_WELCOME_SCREEN(this.id)
    return this.#rest.GET({
      endpoint: endpoint.details.endpoint
    }, { is_require_token: true }).then((rest) => {
      return rest.options.data as unknown as WelcomeScreenChannelStructure
    })
  }



  modifyGuildWelcomeScreenRest(params: WelcomeScreenChannelStructure, reason?: string) {
    const endpoint = ENDPOINT_MODIFY_GUILD_WELCOME_SCREEN(this.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true, reason: reason }).then((rest) => {
      return rest.options.data as unknown as WelcomeScreenChannelStructure
    })
  }


  modifyCurrentUserVoiceStateRest(param_user: string | User, params: ModifyUserVoiceState) {
    const endpoint = ENDPOINT_MODIFY_USER_VOICE_STATE(this.id, typeof param_user == 'string' ? param_user : param_user.id)
    return this.#rest.PATCH({
      endpoint: endpoint.details.endpoint,
      data: params
    }, { is_require_token: true, is_require_data: true }).then((rest) => {
      return rest.options.data as unknown as any
    })
  }
}