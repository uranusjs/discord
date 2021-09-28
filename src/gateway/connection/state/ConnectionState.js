const jsonConvertForString = (a) => {
  try {
    return `${JSON.stringify(a)}`;
  } catch (error) {
    return '{}';
  }
};

const ConnectionZombie = (callback) => {
  return {
    type: 0,
    message: 'ConnectionZombie => Communication with Discord was terminated by the WebSocket Client.',
    callback: callback
  };
};

const ConnectionReady = (callback) => {
  return {
    type: 0,
    message: 'ConnectionReady => Connection established successfully!',
    callback: callback
  };
};

const TryConnectOnGateway = (callback) => {
  return {
    type: 0,
    message: 'ConnectionZombie => Communication with Discord was terminated by the WebSocket Client.',
    callback: callback
  };
};

const FailToConnectOnGateway = (callback, code, reason) => {
  const state = {
    callback: callback ?? false,
    code: code ?? null,
    reason: reason ?? null
  };
  return {
    type: 0,
    message: `FailToConnectOnGateway => ${jsonConvertForString(state)}`,
    callback: callback
  };
};

const MessageGateway = (message) => {
  return `MessageGateway => ${jsonConvertForString(message)}`;
};

module.exports = {
  MessageGateway,
  jsonConvertForString,
  ConnectionZombie,
  ConnectionReady,
  TryConnectOnGateway,
  FailToConnectOnGateway
};

