import React, { useState } from "react";
import Columns from "./Columns";

const Board = () => {
  const [cards, setCards] = useState([]);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Columns
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default Board;
