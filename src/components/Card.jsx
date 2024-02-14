import React from "react";

const Card = ({ title, id, column }) => {
  return (
    <>
      <div
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};

export default Card;
