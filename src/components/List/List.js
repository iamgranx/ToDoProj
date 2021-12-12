import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ list, onDone, onDelete, filterStatus }) => {
  const todoItems = list.map(({ id, name, done }) => (
      <ListItem
        key={id}
        name={name}
        done={done}
        id={id}
        onDone={onDone}
        onDelete={onDelete}
      />
    ));

  return (
    <section>
      <ul>{todoItems}</ul>
    </section>
  );
};

export default List;
