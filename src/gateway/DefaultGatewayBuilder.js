



class DefaultGatewayBuilder {
  

  constructor(client) {
    this.client = client;
    this.shardController = new ShardController(this);
  }
 
  
  #startConnecton() {
    
  }
}


module.exports = DefaultGatewayBuilder;