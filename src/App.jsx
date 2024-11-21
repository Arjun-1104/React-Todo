import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppName from './components/AppName'
import InputSection from './components/InputSection'
import TodoContainer from './components/TodoContainer'
import EmptyTodo from './components/EmptyTodo'
import { useState } from 'react'


function App() {
  
  let [todoItems,setTodoItems] = useState([]);

  // let todoItems = [
  //   { name: 'play cricket',dueDate: '3/4/2024'},
  //   { name: 'paly chess',dueDate: '10/11/2024'},
  //   { name: 'create project',dueDate: '6/8/2024'}   
  // ]

  let handleInputSection = (todoName,todoDate) => {
    setTodoItems([...todoItems,{name: todoName,dueDate: todoDate}]);
  }

  let handleDeleteBtn = (delName) => {
    let newArr = todoItems.filter(({name})=> delName !== name);
    setTodoItems(newArr)
   
  }

  return <div className='border my-5 mx-auto rounded-3 outer-container p-3'>
      <AppName></AppName>
      <InputSection handleInputSection={handleInputSection}></InputSection>
      {todoItems.length===0 && <EmptyTodo></EmptyTodo>}
      <TodoContainer todoItems={todoItems} handleDeleteBtn={handleDeleteBtn}></TodoContainer>    
  </div>
}

export default App
