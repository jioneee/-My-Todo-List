import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard(props, onRemove, todos, onToggle) {

    console.log("todoBoard", props.todoList)
    return (
        <div>
            <h2>Todo List</h2> 
            {props.todoList.map((item)=><TodoItem item={item} onRemove={onRemove} onToggle={onToggle}/>)}
            {/* <ul className="TodoList">
                {todos.map((todo) =>
                <TodoItem
                todo={todo}
                key={todo.id}>
                    
                </TodoItem>
                )}
                </ul>  */}
        </div>
        
   
    )
}
export default TodoBoard