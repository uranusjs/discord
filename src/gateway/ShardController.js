const DefaultGatewayBuilder = require("./DefaultGatewayBuilder");


class ShardController {
  constructor(gateway) {
    if (gateway instanceof DefaultGatewayBuilder) {
      this.gateway = gateway;
    }
  }

  #nextBlock() {

  }


}