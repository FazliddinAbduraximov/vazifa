import React from "react";

export const Card = ({ title, id, setData }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [input, setInput] = React.useState(title);

  const deleteItem = () => {
    setData((pState) => {
      const newArr = pState.filter((item) => item.id !== id);
      return newArr;
    });
  };

  const editItem = () => {
    if (showInput) {
      setData((pState) => {
        return pState.map((item) =>
          item.id === id ? { id, title: input } : item
        );
      });
    }
    setShowInput(!showInput);
  };

  return (
    <div className="border border-black p-5 my-2">
      {!showInput ? (
        <h2 className="text-shadow-blue-500 text-3xl mb-2">{title}</h2>
      ) : (
        <div className="mb-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-blue-500 w-full text-3xl"
            type="text"
          />
        </div>
      )}
      <button
        onClick={deleteItem}
        className="bg-red-400 p-2 cursor-pointer mr-2 rounded-xl"
      >
        Delete
      </button>
      <button
        onClick={editItem}
        className="bg-blue-400 p-2 cursor-pointer rounded-xl"
      >
        {showInput ? "Save" : "Edit"}
      </button>
    </div>
  );
};
