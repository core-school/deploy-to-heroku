import React, { useEffect } from "react";
import { useChat } from "../lib/useChat";
import { InputBox } from "./InputBox";
import { BubbleType, Message } from "./Message";

export const Chat = () => {
  const [state, { start_ws }] = useChat();
  useEffect(() => {
    // Start connection with websocket on component mount
    start_ws();
  }, []);
  console.log(state);
  return (
    <div>
      <div>
        {state.messages.map((msg) => (
          <Message type={msg.type} key={msg.key}>
            {msg.message}
          </Message>
        ))}
      </div>
      <InputBox />
    </div>
  );
};
