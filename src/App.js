import React, {useState} from 'react';
import './App.css';
import { FiEdit } from "react-icons/fi";
import TodoBoard from './components/TodoBoard';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import uuid from 'react-uuid';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '투두리스트',
      checked: true,
    },
    {
      id: 2,
      text: '솔로프로젝트',
      checked: true,
    },
    {
      id: 3,
      text: '완성',
      checked: false,
    },
  ]);


  const addItem = () => {
    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      checked: false
    }
  
    setTodos([...todos, newTodo])
  }

  const onRemove = (e) => {
    const id = e.target.parentNode.dataset.id
    const newTodos = todos.filter((todo) => String(todo.id) !== id)
    console.log(e.target.parentNode)
    console.log(e.target.parentNode.dataset)
    setTodos(newTodos)
  }

  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };
  
  const onToggle = (id) => {
    setTodos(todos.map(todo=>todo.id===id ?
        {
            ...todo,
            checked:!todo.checked
        }
        : todo
        ))
}
  
  


  return (
    
  <main className='main'>
    <Header></Header>
  <input className="input-frame" value = {inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
  <button className="input-button" onClick={addItem}><FiEdit/></button>
  {
    todos.map((todo) => {
      return <TodoItem todo={todo} onRemove={onRemove} onToggle={onToggle}/>
    })
  }
 </main>
  );
}

export default App;













// import React, {useState} from 'react';
// import './App.css';
// import { FiEdit } from "react-icons/fi";
// import TodoBoard from './components/TodoBoard';
// import Header from './components/Header';
// import TodoItem from './components/TodoItem';
// import uuid from 'react-uuid';

// function App() {
//   const [inputValue, setInputValue] = useState('')
//   const [todoList, setTodoList] = useState([])
//   const [isFiltered, setIsFiltered] = useState(false)
//   const [filteredlists, setFilteredlists] = useState(todoList)
//   const [checkedInputs, setCheckedInputs] = useState([]);

//   const addItem = () => {
//     console.log("hi", inputValue)
//     setTodoList([...todoList,inputValue])
//   }
//   const onRemove = (id) => {
//     setIsFiltered(isFiltered.filter((isFiltered)=>isFiltered.id !==id))
//   }
  
   

  // const onRemove = (deleteId) => {
  //   if(isFiltered) {
  //     const deleted = filteredlists.filter(list => list.id !==deleteId);
  //     console.log(deleteId)
  //     setFilteredlists(deleted);
  //     const deletedLists = todoList.filter(list => list.id !== deleteId);
  //     setTodoList(deletedLists);
    
  //   }else {
  //     const deleted = todoList.filter(list => list.id !== deleteId);
  //     setTodoList(deleted)
  //   }
  // }

 

//   const changeHandler = (checked, id) => {
//     if (checked) {
//       setCheckedInputs([...checkedInputs, id]);
//     } else {
//       // 체크 해제
//       setCheckedInputs(checkedInputs.filter((el) => el !== id));
//     }
//   };

//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '투두리스트',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: '솔로프로젝트',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: '완성',
//       checked: false,
//     },
    
//   ]);

//   return (
    
//   <main className='main'>
//     <Header></Header>
//   <input className="input-frame" value = {inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
//   <button className="input-button"onClick={addItem}><FiEdit/></button>
//   <TodoBoard todoList={todoList} todos={todos} changeHandler={changeHandler} onRemove={onRemove}></TodoBoard>
//   <TodoItem></TodoItem>
//  </main>
//   );
// }

// export default App;
