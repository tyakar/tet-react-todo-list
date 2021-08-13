import {Button} from "primereact/button";
import React from "react";

export default function ToDoItem({item,markComplete, deleteItem }) {


    const handleClick =(id) =>{
        deleteItem(id);
    };

return (
    <div>
        <input
            name="completed-checkbox"
            type="checkbox"
            checked={item.status === 1}
            value={item.status === 0}
            onChange={() => markComplete(item)}
        />
        {item.value}
        <Button icon="pi pi-search" className="p-button-warning" onClick={ ()=> handleClick(item.id)}/>

    </div>
)




}