import axios from 'axios';

import ToDoItem from "./ToDoItem";
import { useState,useEffect } from "react";
import AddToDoItem from "./AddToDoItem";
import Footer from "./Footer";

export default function ToDoList({toDoCallback}) {

    const [todos, setTodos] = useState();

    const getData =() =>{

        const opt = {
            method: "GET",
            url: "http://localhost:8080/read",
            headers: {}
        };

        axios(opt).then((resp) => {
            setTodos(resp.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const insertData =(data) =>{

        const opt = {
            method: "POST",
            url: "http://localhost:8080/create",
            data:data,
            headers: {}
        };

        axios(opt).then((resp) => {
            getData();
        }).catch((error) => {
            console.log(error);
        });
    };

    const updateData =(data) =>{

        const opt = {
            method: "PUT",
            url: "http://localhost:8080/update/"+data.id,
            data:data,
            headers: {}
        };

        axios(opt).then((resp) => {
            getData();
        }).catch((error) => {
            console.log(error);
        });
    };

    const deleteData =(id) =>{

        const opt = {
            method: "DELETE",
            url: "http://localhost:8080/delete/"+id,
            headers: {}
        };

        axios(opt).then((resp) => {
            getData();
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {

        getData();
        // setTodos ([
        //     {
        //         id: 1,
        //         name: "Feed the cat",
        //         completed: true,
        //     },
        //     {
        //         id: 2,
        //         name: "Meeting at school",
        //         completed: false,
        //     },
        //     {
        //         id: 3,
        //         name: "Grocery shopping",
        //         completed: false,
        //     },
        // ]);

    },[]);


    useEffect(() => {
        // console.log(todos);
        toDoCallback(todos);
    },[todos]);

    const markComplete = (item) => {
        // setTodos(
        //     todos.map((todo) =>
        //         todo.id === item.id ? { ...todo, status: todo.status ===1 ? 0 : 1 } : todo
        //     )
        // );

        item.status = item.status ===0 ? 1 : 0;
        updateData(item);
    };

    const deleteItem = (id) => {

        deleteData(id);
    };

    const addTodo = (title) => {
        let newTodo = {
            value: title, // new in ES6: same as title: title
            status: 0,
        };

        insertData(newTodo);

        // setTodos([...todos, newTodo]);
    };

    return (
        <div>

            <AddToDoItem addTodo={addTodo}/>
            {todos?.map((val) => (
                <ToDoItem
                    item ={val}
                    markComplete={markComplete}
                    deleteItem={deleteItem}
                    // delTodo={delTodo}
                />
            ))}


    </div>
    );
}