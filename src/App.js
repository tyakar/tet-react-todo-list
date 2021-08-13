import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState,useEffect } from "react";

function App() {
    const [todos, setTodos] = useState();

    const toDoCallback =(data) =>{
        setTodos(data);
    };
    return (
    <div className="App">
        <Header/>
        <ToDoList toDoCallback={toDoCallback}/>
        <Footer totalTasks={todos?.length}
                doneTasks={todos?.filter((todo) =>todo.status ===1 ).length} />
    </div>
  );
}

export default App;
