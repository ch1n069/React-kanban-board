import React from "react";

const Columns = ({ title, headingColor, column, cards, setCards }) => {
  return (
    <div className="w-56 shrink-0">
      {/* the shrink ensure the the contianer does not shrink to the view port */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{cards.length}</span>
      </div>
    </div>
  );
};

export default Columns;
