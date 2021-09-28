
class EventUnknownGateway {

}

class EventGateway {
  constructor(data) {
    this.eventName = 'eventGateway';
    this.data = data;
  }

  // eslint-disable-next-line no-unused-vars
  identifyClass(_data) {

  }
}

module.exports = {
  EventGateway,
  EventUnknownGateway
};
