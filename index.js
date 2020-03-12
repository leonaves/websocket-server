const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const handleMessage = (message) => {
  console.log('received: %s', message);
};

wss.on('connection', (ws) => {
  ws.on('message', handleMessage);
});
