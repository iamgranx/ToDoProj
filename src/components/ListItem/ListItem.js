import Button from "../Button";
import { TasksButtons } from "./ListItem.styles";

const ListItem = () => {
    return (
        <li>
            <p>Сходить в магазин</p>
            <TasksButtons>
                <Button type="button" title="Выполнено" />
                <Button type="button" title="Удалить" />               
            </TasksButtons>
        </li>
    )
};

export default ListItem;