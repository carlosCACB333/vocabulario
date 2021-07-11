import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { aleatorio } from '../helpers/aleatorio';

const Cadena = () => {
    const count = useSelector(state => state.count);
    const active = useSelector(state => state.vocabulario.active.vocabulario);
    
    const [state, setState] = useState([]);

    
    const handleClick = () => {
        let arrayCadenas = [];
        if (active.length !== 0) {
            for (let index = 0; index < count.cantidad; index++) {
                arrayCadenas.push(cadena(active))
            }

            setState(arrayCadenas);
                     
        } else {
            setState([]);
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


const cadena = (vocabulario) => {

    const len=aleatorio(1,vocabulario.length+1)
   // desordenados
    const shuffled = vocabulario.sort(() => 0.5 - Math.random());

    // n primeros del array
    let selected = shuffled.slice(0, len);
     
    return selected;
}