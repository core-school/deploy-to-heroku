import { createStore, createHook, Action } from "react-sweet-state";
import { v4 as uuidv4 } from "uuid";
import io, { Socket } from "socket.io-client";

type ChatMessage = {
  type: string;
  message: string;
  key: string;
};

type ChatStoreState = {
  messages: ChatMessage[];
  connection: Socket;
};

const initialState: ChatStoreState = {
  messages: [
    // { type: "server", message: "Hola", key: uuidv4() },
    // { type: "me", message: "¿Que tal?", key: uuidv4() },
    // { type: "server", message: "¡Bien!", key: uuidv4() },
    // { type: "server", message: "¡HEY!", key: uuidv4() },
  ],
};
type Actions = typeof actions;

const actions = {
  start_ws:
    () =>
    ({ getState, setState }) => {
      const socket: Socket = io("http://localhost:3000");
      setState({ connection: socket });
      socket.on("connect", () => {
        console.log("Connection started with chat backend");
      });
      socket.on("chat", (msg) => {
        const { messages } = getState();
        setState({ messages: [...messages, { ...msg, key: uuidv4() }] });
        console.log("Received message from server");
      });
    },
  send_message:
    (msg: string): Action<ChatStoreState> =>
    ({ setState, getState }) => {
      const { messages, connection } = getState();
      const new_message: ChatMessage = {
        type: "me",
        message: msg,
        key: uuidv4(),
      };
      setState({ messages: [...messages, new_message] });
      connection.emit("chat", new_message);
    },
};

const Store = createStore<ChatStoreState, Actions>({
  initialState,
  actions,
});

export const useChat = createHook(Store);
