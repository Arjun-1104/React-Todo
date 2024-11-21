import style from '../styles/SingleTodo.module.css';

let SingleTodo = ({name,dueDate,handleDeleteBtn}) => {
    
     return <div className="container">
        <div className='row justify-content-around align-items-center my-3'>
            <div className='col-6 d-flex align-items-center'>
                <p>{name}</p>
            </div>
            <div className="col-4 d-flex align-items-center">
                <p>{dueDate}</p>
            </div>
            <div className="col-2">
                <button className={`w-100 ${style.delBtn}`} onClick={()=>handleDeleteBtn(name)}>Delete</button>
            </div>
        </div>
    </div>
}

export default SingleTodo;