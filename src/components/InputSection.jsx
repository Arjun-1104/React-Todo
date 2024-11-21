import { useRef } from "react";
import style from '../styles/InputSection.module.css';

let InputSection = ({handleInputSection}) =>{

    const nameElement = useRef('');
    const dateElement = useRef('');

    let handleAdd = () => {
        let name = nameElement.current.value;
        let dueDate = dateElement.current.value;
       
        if(name === ''){
            alert('Task is empty...')
        }
        else if(dueDate === ''){
            alert('Date is empty...');
        }
        else{
            nameElement.current.value = '';
            dateElement.current.value = '';
            handleInputSection(name,dueDate);  
        }
        
    }

    return <div className="container">
        <div className='row justify-content-around align-items-center my-3'>
            <div className='col-6'>
                <input ref={nameElement} type="text" className="w-100 p-1" placeholder='Enter your task?'/>
            </div>
            <div className="col-4">
                <input ref={dateElement} type="date" className="w-100 p-1"/>
            </div>    
            <div className="col-2">
                <button className={`w-100 ${style.addBtn}`} onClick={handleAdd}>Add</button>
            </div>
        </div>
    </div>
}

export default InputSection;