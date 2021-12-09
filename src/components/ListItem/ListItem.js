import React from "react";
import Button from "../Button";
import { TasksButtons } from "./ListItem.styles";




const ListItem = ({ name, id, done, onDone, onDelete }) => {
    const handleDelete = () => {
        onDelete(id)
    };

    const handleDone = () => {
        onDone(id)
    };
    

    return (
        <li>
            <p>{name}</p>
            <div>
                <TasksButtons>
                    {!done && (
                    <Button type="button" title="Выполнено" onclick={handleDone} />

                    )}
                    
                    <Button type="button" title="Удалить" onClick={handleDelete} />               
                </TasksButtons>
            </div>

        </li>
    )
};

export default ListItem;