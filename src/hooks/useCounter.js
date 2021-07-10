import {useState} from 'react'

const UseCounter = (initialState=0) => {

    const [counter, setCounter] = useState(initialState);

    const reset = (initial=initialState) => {
        setCounter(initial);
    }

    const increment = (max=20) => {
        if (counter < max) {
            setCounter(counter + 1);            
        }
    }

    const decrement = (min=0) => {
        if (counter >min) {
            setCounter(counter - 1);            
        }
    }

    return{counter,increment,decrement,reset}
}

export default UseCounter