import SingleTodo from "./SingleTodo";

let TodoContainer = ({todoItems,handleDeleteBtn}) => {
    return <div className='row d-flex justify-content-around my-1 mx-0'>
      {todoItems.map(({name,dueDate})=> <SingleTodo key={name} name={name} dueDate={dueDate} handleDeleteBtn={handleDeleteBtn}/>)}
    
  </div>
}

export default TodoContainer;