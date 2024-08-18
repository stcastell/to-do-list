const Lab = props =>{

    let aux = '';

    const clickHandler =  () => {
        localStorage.setItem(aux, JSON.stringify(['Hacer algo', false]))
    }

    const changeHandler =  e => {
        aux = e.target.value;
    }

    const readHandler = () =>{
        let task = JSON.parse(localStorage.getItem(aux))
        console.log(task[1])
    }

    return (
        <>
            <input type='text' placeholder='Test' onChange={changeHandler}/>
            <button onClick={clickHandler}>Set</button>
            <button onClick={readHandler}>Read</button>
        </>
    );
}

export default Lab;