import React, { useState } from "react";

const Columns = ({ title, headingColor, column, cards, setCards }) => {
  // state to get the active card
  const [active, setActive] = useState(false);

  return (
    <div className="w-56 shrink-0">
      {/* the shrink ensure the the contianer does not shrink to the view port */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{cards.length}</span>
      </div>
      {/* houses all the cards */}
      <div
        className={`h-full w-full transition-colors${
          !active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      ></div>
    </div>
  );
};

export default Columns;
