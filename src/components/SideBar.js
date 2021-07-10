import React from 'react'
import Vocabularios from './Vocabularios';
import { useDispatch, useSelector } from 'react-redux';
import { startAddVocabulario } from '../actions/vocabulario';

const SideBar = () => {

    const dispatch = useDispatch();
    const vocabularios = useSelector(state => state.vocabulario.vocabularios);
   
    const handleClick = () => {
        dispatch(startAddVocabulario());
    }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white shadow  flex-fill" style={{  height: '100vh' , maxWidth:'600px'}}>
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
                             <strong className='text-center text-warning'>La cantidad máxima de vocabularios es 6</strong>
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
            
            <hr/>
            
        </div>
    )
}

export default SideBar
