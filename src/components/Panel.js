import React from 'react'
import Cadena from './Cadena'
import Counter from './Counter'
import FormAddCadena from './FormAddCadena'
import NavBar from './NavBar'

const Panel = () => {

    
    return (
        <div className="d-flex flex-column flex-shrink-0   flex-fill "  >
            <NavBar />


           <div className='container'>
               <div className='  shadow animate__animated animate__animated animate__zoomIn'>
                    
                   <div className='d-flex flex-column justify-content-center align-item-center'>
                        
                        <FormAddCadena/>
                      
                   </div>
               </div>
              
                <div className='shadow p-1 animate__animated animate__zoomIn'>
                    <Counter />
                    <Cadena/>
                </div>
           </div>
        </div>
    )
}

export default Panel
