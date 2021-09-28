const { EventGateway } = require('../EventGateway');

class ReadyEvent extends EventGateway {
  constructor() {
    super();
  }
}


module.exports = { ReadyEvent };
