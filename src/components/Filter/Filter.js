import Button from "../Button";
import { ButtonStyle } from "../Button/Button.styles";
import { ButtonsGroup, FilterWrapper, SearchBlock } from "./Filter.styles";
import Input from "../Input";

// handleAllClick => this.props.onClick('all')
// handleDoneClick => this.props.onClick('done')
// handleDeletedClick => this.props.onClick('deleted')

const Filter = ({ handleAllClick, handleDoneClick, handleDeletedClick, handleActiveClick }) => {
    return(
      
        <section>
          <FilterWrapper>
            <SearchBlock>
            <Input
              label="Поиск по названию"
              id="search"
              placeholder="Начни вводить"
            />
            </SearchBlock>

            <ButtonsGroup>
              <Button onClick={handleAllClick} type="button" title="Все" />
              <Button onClick={handleActiveClick} type="button" title="Активные" />
              <Button onClick={handleDoneClick} type="button" title="Выполненные" />
              <Button onClick={handleDeletedClick} type="button" title="Удаленные" />
              
            </ButtonsGroup>

          </FilterWrapper>
      </section>
      
        
    )
 }

 export default Filter;