import React from "react"
import { FiTrash2 } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi"
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';


function TodoItem(props, onToggle) {
    return(
        <div className="todo-item" data-id={props.todo.id} >
            {props.todo.text}
            <input className="Todo-checkbox" type="checkbox"onClick={() => onToggle(props.todo.id)}></input>
            <button className="delete-button" onClick={props.onRemove}><FiTrash2 classname="FiTrash2" /></button>
            <button className="edit-button" onClick={()=>onToggle(props.todo.id)}><FiEdit2 className="FiEdit2" size="12"/></button>
        </div>
    )
}
export default TodoItem




// import React from "react"
// import { FiTrash2 } from "react-icons/fi";

// function TodoItem(props, onRemove) {
//     // const {id, text, checked} = todo;

//     return(
//         <div className="todo-item">
//             {props.item}
//             <input className="Todo-checkbox" type="checkbox"></input>
//             <button className="delete-button" onClick={()=>onRemove()}><FiTrash2/></button>
            
//         </div>
//     )
// }
// export default TodoItem