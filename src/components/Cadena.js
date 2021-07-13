import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { gererarCadenas } from '../helpers/functions';

const Cadena = () => {
    const count = useSelector(state => state.count);
    const active = useSelector(state => state.vocabulario.active.vocabulario);
    
    const [state, setState] = useState([]);

    
    const handleClick = () => {
        
        if (active.length !== 0) {
            setState(gererarCadenas(active, count.cantidad));          
        } 
    }

    useEffect(() => {
        setState([]);
    }, [active])

    return (
        <div >
            <div className='text-center mb-3'>
                <button className='btn btn-primary btn-lg' onClick={handleClick}
                    hidden={
                        (active.length===0)?true:false
                    }
                >
                    Generar cadenas
                </button>
                
            </div>

           <div className='m-1'>
                <div className='text-white  overflow-auto d-grid' style={{maxHeight:'400px'}}>
                    
                    {
                        
                        state.map((value,index) => (
                            <div className=" d-flex justify-content-between align-items-center shadow-lg rounded p-2 m-2 animate__animated animate__zoomInLeft" key={index}>
                                { index+1} = {value}
                                <span className="badge bg-primary rounded-pill">{value.length}</span>
                            </div>
                        ))
                    }
                </div>
            </div>  
        </div>
    )
}

export default Cadena
