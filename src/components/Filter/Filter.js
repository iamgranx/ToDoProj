import Button from "../Button";
import { ButtonStyle } from "../Button/Button.styles";
import { ButtonsGroup, FilterWrapper, SearchBlock } from "./Filter.styles";
import Input from "../Input";

// handleAllClick => this.props.onClick('all')
// handleDoneClick => this.props.onClick('done')
// handleDeletedClick => this.props.onClick('deleted')

const Filter = () => {
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
              <Button type="button" title="Все" />
              <Button type="button" title="Выполненные" />
              <Button type="button" title="Удаленные" />
            </ButtonsGroup>

          </FilterWrapper>
      </section>
      
        
    )
 }

 export default Filter;