

class ConnectionBlock {
  constructor({
    id,
    client,
    token,
    options,
    gateway
  }) {
    this.#client = client;
    this.#token = token;
    this.options = options;
    this.id = id
    this.state = 'noStatus';
    this.gateway = null;
  }
  #createWS() {

  }
}