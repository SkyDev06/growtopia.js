export interface ClientType {
  ip: string;
  port: number;
  setEmit: (emit: (...args: any[]) => void) => void;
  create: (maxPeers: number, isClient: boolean) => void;
  service: () => void;
  deInit: () => void;
  send: (peerID: number, count: number, packets: Buffer[]) => void;
  disconnect: (peerID: number) => void;
  disconnectLater: (peerID: number) => void;
  disconnectNow: (peerID: number) => void;
  toggleNewPacket: () => void;
  getPeerPing: (netID: number) => number;
  connect: (ipAddress: string, port: number, peerID: number) => boolean;
}

export interface ClientOptions {
  /** Built-in https web server */
  https: {
    enable: boolean;
    url: string;
    type2: boolean;
  };
  ip: string;
  port: number;
  enet: {
    maxPeers?: number;
    useNewPacket?: {
      asClient?: boolean;
    };
  };
}
