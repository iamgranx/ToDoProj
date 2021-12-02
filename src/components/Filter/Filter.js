import Button from "../Button";
import { ButtonStyle } from "../Button/Button.styles";
import { ButtonsGroup, FilterWrapper, SearchBlock } from "./Filter.styles";


const Filter = () => {
    return(
      
        <section>
          <FilterWrapper>
            <SearchBlock>
                <label htmlFor="search">Поиск по названию</label>
                <input id="search" placeholder="Начни вводить" />
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