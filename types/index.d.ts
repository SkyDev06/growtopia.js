export interface DataObject {
  [key: string]: string | number;
}

export interface PeerData {
  netID: number;
}

export * from "./client";
export * from "./packets";
export * from "./events";
export * from "./items";
