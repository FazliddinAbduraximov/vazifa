import React from "react";
import { nanoid } from "nanoid";

export const Form = ({ setData }) => {
  const [input, setInput] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    setData((pState) => {
      return [...pState, { title: input, id: nanoid() }];
    });
    setInput("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="my-2 p-2.5 bg-gray-200"
        type="text"
      />
      <button className="p-2.5 cursor-pointer bg-green-500">send</button>
    </form>
  );
};
