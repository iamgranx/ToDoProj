import Button from "../Button";
import { NewTaskWrapper } from "./Form.styles";



const Form = () => {
    return (
      <section>
        <NewTaskWrapper>
          <div>
            <label htmlFor="search">Новое задание</label>
            <input id="search" placeholder="Название" />
          </div>
          <div>
          <Button type="button" title="Создать" />
          </div>
        </NewTaskWrapper>
    </section>
    );
 }

 export default Form;