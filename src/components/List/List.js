import React from "react";
import ListItem from "../ListItem/ListItem";
import { memo } from "react";



const List = ({ list, onDone, onDelete, filterStatus }) => {
    const todoItems = filterStatus(list).map(({ id, name, done }) => (
        <ListItem 
        key={id}
        name={name} 
        done={done} 
        id={id} 
        onDone={onDone} 
        onDelete={onDelete} />
    ));

    return (
        <section>
            <ul>
                {todoItems}
            </ul>
        </section>
    )
}

export default memo(List);