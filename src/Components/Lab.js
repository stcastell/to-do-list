const Lab = props =>{

    let aux = '';

    const clickHandler =  () => {
        alert(localStorage.getItem(aux))
    }

    const changeHandler =  e => {
        aux = e.target.value;
    }

    return (
        <>
            <input type='text' placeholder='Test' onChange={changeHandler}/>
            <button onClick={clickHandler}>Click</button>
        </>
    );
}

export default Lab;