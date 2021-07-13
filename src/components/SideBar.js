import React from 'react'
import Vocabularios from './Vocabularios';
import { useDispatch, useSelector } from 'react-redux';
import { startAddVocabulario } from '../actions/vocabulario';

const SideBar = () => {

    const dispatch = useDispatch();

    const vocabularios = useSelector(state => state.vocabulario.vocabularios);
   
    const handleClick = () => {
        if (vocabularios.length <= 5) {
            dispatch(startAddVocabulario());            
        }
    }

    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white  col-md-4 col-12 fill-content" style={{  height: '100vh' }}>
            <div className='text-center'>
                <img src='https://estudiaperu.pe/wp-content/uploads/2019/12/UNASAM.png' alt="no se pudo cargar" style={{maxHeight:'150px'}} className='img-fluid' />
            </div>
            <hr />
            
                <button
                    className='btn btn-primary btn-lg'
                    onClick={handleClick}
                    disabled={(vocabularios.length===5)?true:false}
                >
               
                
                    {
                    (vocabularios.length === 5)
                            ?(
                                <strong className='text-center text-warning'>La cantidad máxima de vocabularios es 5</strong>
                            )
                            : (
                                <strong>Agregar nuevo vocabulario</strong>
                            )
                    
                    }
                </button>
            
         
            <br />

            <div className='overflow-auto'>
                {
                    vocabularios.map((value,index) => (
                        <Vocabularios key={index} index={index} vocabulario={value}/>
                    ))
                }
                
            </div>
            
          
            
        </div>
    )
}

export default SideBar
