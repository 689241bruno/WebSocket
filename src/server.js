const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();

const porta = process.env.PORT || 3000;

const wss = new WebSocketServer({ port: porta });
console.log(`rodando na porta: ${porta}`);

wss.on("connection", (ws) => {
  ws.on("error", console.error);
  ws.send("Menssagem enviada pelo servidor");
  ws.on("message", (data) => {
    console.log(data.toString());
    wss.clients.forEach((client) => client.send(data.toString()));
  });

  console.log("client connected ");
});
