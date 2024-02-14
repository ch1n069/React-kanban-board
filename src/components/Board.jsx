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
      <Columns
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Columns
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Columns
        title="In Progress"
        column="in progress "
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Columns
        title="Complete"
        column="complete"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default Board;
