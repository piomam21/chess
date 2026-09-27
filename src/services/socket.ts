// Adapter pod WebSockety/Socket.IO
export type RealtimeEvent = "move" | "chat" | "game-state";
export interface RealtimeClient {
  connect(): void;
  disconnect(): void;
  emit(event: RealtimeEvent, payload: unknown): void;
}
export const realtime: RealtimeClient = {
  connect() {},
  disconnect() {},
  emit() {
    /* backend do podpięcia */
  },
};
