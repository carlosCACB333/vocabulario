import React, { useEffect,  } from 'react'
import { useDispatch } from 'react-redux';
import { startAddCount } from '../actions/counter';
import UseCounter from '../hooks/useCounter'

const Counter = () => {


    const { counter, increment, decrement, reset } = UseCounter(10);
    const dispatch = useDispatch();

    
    
    useEffect(() => {
        dispatch(startAddCount(counter));
    }, [counter,dispatch])
    
    return (
       <div className='my-2 text-center my-1'>
            <h3>cantidad de cadenas</h3>
            <button
                onClick={()=>decrement(0)}
                className='btn btn-primary'
                disabled={
                    (counter===1)? true:false
                }
            >
                menos
            </button>

            <button onClick={()=>reset()} className='btn btn-primary mx-1'>reset</button>
            
            <button
                onClick={()=>increment(20)}
                className='btn btn-primary'
                disabled={
                    (counter===20)?true:false
                }
            >
                más
            </button>
            <br  />
            <strong className='fs-1 '>{counter}</strong>
        </div>
    )
}

export default Counter
