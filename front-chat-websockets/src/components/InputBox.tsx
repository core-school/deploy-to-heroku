import React, { useState } from "react";

import styled from "styled-components";
import { useChat } from "../lib/useChat";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  height: 40px;
`;

export const InputBox = () => {
  const [msg, setMsg] = useState("");
  const [_, actions] = useChat();
  const handleSend = () => {
    if (msg) {
      console.log(`Sending message; ${msg}`);
      setMsg("");
      actions.send_message(msg);
    } else {
      console.log("Message is empty");
    }
  };
  return (
    <Wrapper>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={handleSend}>SEND</button>
    </Wrapper>
  );
};
