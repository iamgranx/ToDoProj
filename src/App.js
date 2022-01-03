import React  from "react";
import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

// import ListItem from "../ListItem/ListItem";
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

const App = () => {
  const [filterStatus, setFilterStatus] = useState('active');
  const [filterValue, setFilterValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [deletedTodoList, setDeletedTodoList] = useState([]);
  

  // state = {
  //   filterStatus: "active",
  //   filterValue: "",
  //   todoList: [], //[skeletonTodo]
  //   deletedTodoList: []
//  }

  const handleCreateTodo = useCallback((name) => setTodoList((prevTodoList) => ([...prevTodoList, { name, done: false, id: uuidv4() }]),[]))
  // (name) => {
  //   setTodoList([...todoList, { name, done: false, id: uuidv4() }])
  // };
  //   this.setState({
  //     todoList: this.state.todoList.concat({
  //       name,
  //       done: false,
  //       id: uuidv4()
  //     })
  //   });
  // };

 const getFilteredList = () => {
    if (filterStatus === "active") {
      return todoList.filter((todoList) => todoList.done === false);
    }
    if (filterStatus === "done") {
      return todoList.filter((todoList) => todoList.done === true);
    }
    if (filterStatus === "deleted") {
      return deletedTodoList;
    }
    if (filterStatus === "all") {
      return todoList;
    }
  };

 const getStatusActive = useCallback(() => setFilterStatus((prevFilterStatus) => prevFilterStatus = "active"), []);
 const getStatusAll = useCallback(() => setFilterStatus((prevFilterStatus) => prevFilterStatus = "all"), []);
 const getStatusDone = useCallback(() => setFilterStatus((prevFilterStatus) => prevFilterStatus = "done"), []);
 const getStatuDeleted = useCallback(() => setFilterStatus((prevFilterStatus) => prevFilterStatus = "deleted"), []);

 const handleDone = (id) => {
    setTodoList(todoList.map((todo) => 
    todo.id === id ? {...todo, done: true} : todo))
    // this.setState((state) => ({
    //   todoList: state.todoList.map((todo) =>
    //     todo.id === id ? { ...todo, done: true } : todo
    //   )
    // }));
  };

 const handleDelete = (id) => {
    const deletedTodoIndex = todoList.findIndex((todo) => todo.id === id);
    if(deletedTodoIndex < 0) {
      return
    }

    const deletedTodo = todoList.splice(deletedTodoIndex, 1);
    setTodoList([...todoList]);
    setDeletedTodoList(deletedTodoList.concat(deletedTodo))
  
    // this.setState((state) => {
    //   const deletedTodoIndex = state.todoList.findIndex(
    //     (todo) => todo.id === id
    //   );

    //   const deletedTodo = state.todoList.splice(deletedTodoIndex, 1);

    //   return {
    //     todoList: [...state.todoList],
    //     deletedTodoList: state.deletedTodoList.concat(deletedTodo)
    //   };
    // });
  };

  // render() {
  //   const { todoList } = this.state;

    return (
      <AppWrapper>
        <div>
          <Header numbers={<div>Колличество записей {todoList.length}</div>} />
          {todoList.length > 0 && (
            <>
              <Filter
                handleActiveClick={getStatusActive}
                handleAllClick={getStatusAll}
                handleDeletedClick={getStatuDeleted}
                handleDoneClick={getStatusDone}
              />
            </>
          )}

          <List
            list={todoList}
            onDone={handleDone}
            onDelete={handleDelete}
            filterStatus={getFilteredList}
          />
          <Form onCreateTodo={handleCreateTodo} />
        </div>
      </AppWrapper>
    );
  };
export default App;