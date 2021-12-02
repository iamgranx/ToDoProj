import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import { AppWrapper } from "./App.styles";

function App() {
  return (
    <AppWrapper>
      <div>
        <Header />
        <Filter />
        <List />
        <Form />
      </div>      
    </AppWrapper>
    
  );
}

export default App;
