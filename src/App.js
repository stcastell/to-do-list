import styles from './App.module.css';
import Input from './Components/Input';
import Tasks from './Components/Tasks';
import React, { useState } from 'react';

// import Lab from './Components/Lab';

function App() {

  let storage = []
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let object = JSON.parse(localStorage.getItem(localStorage.key(i)))
      storage.push({
        task: object['task'],
        id: localStorage.key(i),
        isCompleted: object['isCompleted']
      })
    }
  }

  const [task, setTask] = useState(storage)

  const getEnteredTask = enteredTask => {
    setTask(prev => {
      return [enteredTask, ...prev];
    })
  }

  const removeHandler = id => {
    setTask(prev => {
      return prev.filter((task) => task.id !== id);
    })
    localStorage.removeItem(id.toString())
  }

  return (

    <div className={styles.main_container}>
      <Tasks enteredTask={task} onRemove={removeHandler} />
      <Input sendTask={getEnteredTask} />
      {/* <Lab /> */}
    </div>

  );

}

export default App;