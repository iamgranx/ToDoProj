import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Filter from "./components/Filter";
import { AppWrapper } from "./App.styles";

// const skeletonTodo = {
//   id: uuidv4(),
//   name: "some todo",
//   done: false,
// };

class App extends React.Component {

  state ={ 
    filterStatus: "all",
    filterValue: "",
    todoList: [], //[skeletonTodo]
    deletedTodoList: [],
  };
  handleCreateTodo = (name) => {
    this.setState({
      todoList: this.state.todoList.concat({ 
        name,
        done: false, 
        id: uuidv4() 
      }),
    });
  };

  tasksNumbers = () => {
      return (
        <div>
        Колличество записей {this.state.todoList.length} 
        </div>
      )
    }
  
    getFilteredList = () => {
      if(this.state.filterStatus ==="active") {
        return this.state.done === false
      }
      if(this.state.filterStatus === "done") {
        return this.state.todoList
      } if(this.state.filterStatus === "deleted") {
        return this.state.deletedTodoList
      } if(this.state.filterStatus === "all") {
        return true
      }
    };

    getStatusActive = () => {
      this.setState.Filter({Filter: "active"})
    }
    getStatusAll = () => {
      this.setState.Filter({Filter: "all"})
    }
    getStatusDone = () => {
      this.setState.Filter({Filter: "done"})
    }
    getStatuDeleted = () => {
      this.setState.Filter({Filter: "deleted"})
    }

  handleDone = (id) => {
    this.setState((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, done: true } : todo
      ),
    }));
    console.log('123')
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
          <Header numbers={this.tasksNumbers()} />
          {todoList.length > 0 && (
            <>
            <Filter />
            </>
          )
          }

          <List list={todoList}
          onDone={this.handleDone}
            onDelete={this.handleDelete}/>
          <Form onCreateTodo={this.handleCreateTodo} />
        </div>      
      </AppWrapper>
      
    );

  }
 
}

export default App;
