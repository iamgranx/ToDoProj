import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import { AppWrapper } from "./App.styles";

class App extends React.Component {

  state ={ 
    filterStatus: "all",
    filterValue: "",
    todoList: [],
    deletedTodo: [],
  };
  handleCreateTodo = (name) => {
    this.setState({
      todoList: this.state.todoList.concat({ name, done: false, id: uuidv4() }),
    });
  };

  handleDone = (id) => {
    this.setState((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, done: true } : todo
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((state) => {
      const deletedTodoIndex = state.todoList.findIndex(
        (todo) => todo.id === id
      );

      const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);

      return {
        todoList: [...state.todoList],
        deletedTodoList: state.deletedTodoList.concat(deletedTodo),
      };
    });
  };


  render () {
    const { todoList } = this.state;


    return (
      <AppWrapper>
        <div>
          <Header />
          {todoList.length > 0 && (
            <>
            <Filter />
            </>
          )
          }

          <List list={todoList}  onDone={this.handleDone} onDelete={this.handleDelete}/>
          <Form onCreateTodo={this.handleCreateTodo} />
        </div>      
      </AppWrapper>
      
    );

  }
 
}

export default App;
