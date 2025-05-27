const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`rodando na porta ${PORT}`));

wss.on("connection", (ws) => {
  ws.on("error", console.error);
  ws.send("Menssagem enviada pelo servidor");
  ws.on("message", (data) => {
    console.log(data.toString());
    wss.clients.forEach((client) => client.send(data.toString()));
  });

  console.log("client connected ");
});
