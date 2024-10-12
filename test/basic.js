import { Client, TextPacket, Peer, Tank } from "../dist/index";
const client = new Client({
  enet: {
    ip: "0.0.0.0"
  }
});

client.on("ready", () => {
  console.log(`ENet server: port ${client.config.enet.port} on ${client.config.enet.ip}`);
});

client.on("error", (err) => {
  console.log("Something wrong", err);
});

client.on("connect", (netID) => {
  console.log(`Connected netID ${netID}`);
  const peer = new Peer(client, netID);
  peer.send(TextPacket.from(0x1));
});

client.on("disconnect", (netID) => {
  console.log(`Disconnected netID ${netID}`);
});

client.on("raw", (netID, data) => {
  const peer = new Peer(client, netID);
  console.log("raw", data);
  console.log(peer.ping, peer.state);
});

client.listen();
