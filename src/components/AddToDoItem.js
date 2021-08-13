import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function AddToDoItem({addTodo }) {

    const [itemVal, setItemVal] = useState();

    const handleClick =(data) =>{
        addTodo(itemVal);
    };

    return (
        <div>
            <div className="p-col-12 p-md-4">
                <div className="p-inputgroup">

                    <InputText placeholder="İş Giriniz" value={itemVal} onChange={(e) => setItemVal(e.target.value)} />
                    <Button icon="pi pi-search" className="p-button-warning" onClick={handleClick}/>
                </div>
            </div>
        </div>
    )




}