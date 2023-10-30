import { Caching } from "../../types";
import { Client } from "./Client";

class GrowApi {
  public client: Client;

  constructor() {}

  public init(client: Client) {
    this.client = client;
  }

  public onConnect(netID: number) {}
  public onDisconnect(netID: number) {}
  public onRaw(netID: number, data: Buffer) {}
}

export { GrowApi };
