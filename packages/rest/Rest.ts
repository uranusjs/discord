import axios, { AxiosRequestConfig } from 'axios';
import { replace, Tracking } from '..';
import { APIDiscord } from './definitions/RestAction';

export interface BodyRestInterface {
  json?: any;
  data?: any;
  method?: string;
  token?: string;
  statuscode?: number;
  took?: number;
  endpoint: string;
  ratelimit?: boolean;
  data_empty?: boolean;
  // Bucket
  // @link{https://discord.com/developers/docs/topics/rate-limits#header-format-rate-limit-header-examples}
  bucket_id?: string;
}

export interface OptionsRequest {
  is_require_token?: boolean;
  is_require_data?: boolean;
  reason?: string;
}

export class BodyRest {
  options: BodyRestInterface;
  constructor(options: BodyRestInterface) {
    this.options = options;
  }

}

export interface HeadersRest {
  Authorization?: string;
  'X-Audit-Log-Reason'?: string;
}

export interface EventRest {
  method?: string;
  took?: number;
  failed?: boolean;
  err?: Error | string;
  timeout?: number;
  bucket_id?: string;
  retry?: boolean;
  endpoint: string;
  limited?: boolean;
  details?: any;
}


export class RestManager {
  tracking: Tracking;
  constructor(tracking: Tracking) {
    this.tracking = tracking;
  }
  event(data: EventRest) {

    const event_data = {
      tag_log: ['REST'],
      endpoint_one: replace(data.endpoint),
      endpoint_two: data.endpoint,
      event: 'rest',
      took: data.took,
      data: data
    }
    this.tracking.emit(event_data.event, { event_data })
  }

  async GET(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'GET'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }



  async POST(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'POST'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }



  async PATCH(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'PATCH'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }


  async PUT(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'PUT'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }

  async HEAD(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'HEAD'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }

  async PURGE(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'PURGE'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }



  async DELETE(bodyRest: BodyRestInterface, options?: OptionsRequest) {
    const time = Date.now();
    const method = 'DELETE'
    let headers: HeadersRest = {}
    if (options !== undefined) {
      if (options.is_require_token !== undefined) {
        if (options.is_require_token) {
          headers.Authorization = `Bot ${bodyRest.token}`
        }
      }
    }
    const config: AxiosRequestConfig = {
      baseURL: `https://discord.com/api/v${APIDiscord.VERSION}${bodyRest.endpoint}`,
      method: method,
      headers: headers,
    }

    if (options !== undefined) {
      if (options.is_require_data !== undefined) {
        if (options.is_require_data) {
          config.data = bodyRest.data
        }
      }
      if (options.reason !== undefined) {
        headers['X-Audit-Log-Reason'] = options.reason;
      }
    }

    this.event({
      method: method,
      endpoint: bodyRest.endpoint,
      failed: false,
    })
    try {
      const data_1 = await axios(config);
      let d = null;
      let isEmpty = false;
      try {
        d = JSON.stringify(data_1.data);
      } catch (err) {
        isEmpty = true;
      }
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: false,
        took: Date.now() - time,
        details: data_1
      });
      return new BodyRest({
        json: d,
        method: method,
        data: bodyRest.data,
        token: '[REDACTED]',
        statuscode: data_1.status,
        took: Date.now() - time,
        endpoint: bodyRest.endpoint,
        ratelimit: false,
        data_empty: isEmpty,
        bucket_id: ''
      });
    } catch (err_1) {
      this.event({
        method: method,
        endpoint: bodyRest.endpoint,
        failed: true,
        took: Date.now() - time,
      });
      throw err_1;
    }
  }
}