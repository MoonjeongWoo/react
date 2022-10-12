import React, { useState } from "react";
const SayFunction = () => {
  const [message, setmessage] = useState("");
  const onClickenter = () => {
    setmessage("언능 오슈");
  };
  const onClickleave = () => {
    setmessage("안녕히 가유");
  };
  return (
    <>
      <button onClick={onClickenter}>입장</button>
      <button onClick={onClickleave}>퇴장</button>
      <h1>{message}</h1>
    </>
  );
};

export default SayFunction;
