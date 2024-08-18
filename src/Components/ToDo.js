import React, {useState} from 'react'; 
import styles from './ToDo.module.css'

const ToDo = props =>{

    const [isOpen, setIsOpen] = useState(props.isCompleted);

    const changeHandler = () =>{
        if(isOpen === false){
            setIsOpen(true);
            localStorage.setItem(props.id, JSON.stringify({
                task: props.task,
                id: props.id,
                isCompleted: true
            }))

        }else{
            setIsOpen(false);
            localStorage.setItem(props.id, JSON.stringify({
                task: props.task,
                id: props.id,
                isCompleted: false
            }))
        }
    }

    const deleterHandler = () =>{
        props.onDelete(props.id);
    }


    return(
        <div className={styles.item}>
            {isOpen ? 
                <input checked type="checkbox" onChange={changeHandler} className={styles.checkbox}/>
            : 
                <input type="checkbox" onChange={changeHandler} className={styles.checkbox}/>
            }
            
            <h3 className={isOpen ? styles.task_not_open : styles.task_open}>{props.task}</h3>
            <button className = {styles.delete} onClick={deleterHandler}>Delete</button>
        </div>
    );
}

export default ToDo;