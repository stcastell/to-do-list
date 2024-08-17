import styles from "./Input.module.css";
import React, { useState } from 'react';

const Input = props => {

    const [task, setTask] = useState({
        task: '',
        id: 0
    });

    const submitHandler = e => {
        e.preventDefault();

        if (task.task.trim()) {

            setTask({
                task: task.task,
                id: task.id
            })

            localStorage.setItem(task.id.toString(), task.task);
            props.sendTask(task);

            setTask({
                task: '',
                id: task.id
            });

        }

    }

    const changeHandler = e => {
        setTask({
            task: e.target.value,
            id: Math.random()
        });
    }

    return (

        <div className={styles.form_card}>
            <form className={styles.task_form}>
                <input type="text" placeholder="Task" onChange={changeHandler} value={task.task}></input>
                <button type="submit" onClick={submitHandler}>Add task</button>
            </form>
        </div>

    );

}

export default Input;