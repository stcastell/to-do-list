import styles from './Tasks.module.css';
import ToDo from './ToDo';

const Tasks = props => {

    const deleterHandler = id =>{
        props.onRemove(id);
    }

    return (

        <div className={styles.list_container}>

            <ul className={styles.list_card}>

                {props.enteredTask.map(item => (
                    <li key={item.id}>
                        <ToDo task={item.task} id={item.id} onDelete = {deleterHandler}/>
                    </li>
                ))}

            </ul>

        </div>

    );

}

export default Tasks;