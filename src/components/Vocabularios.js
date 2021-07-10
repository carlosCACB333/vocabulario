import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startActiveVocabulario, startVocabularioDelete } from '../actions/vocabulario';

const Vocabularios = ({ index,vocabulario }) => {
    
    const active = useSelector(state => state.vocabulario.active)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(startActiveVocabulario(index,vocabulario))
    }

    const handleDelete = () => {
        dispatch(startVocabularioDelete(index))
    }
    return (
        <>
            <div className={`alert shadow-lg alert-dismissible fade show hover m-3 p-0 ${(index===active.index)?('active'):''} animate__animated animate__backInLeft`} role="alert"  >
                <div className='m-2 pointer' style={{height:'100%'}} onClick={handleClick}>
                    <h6>vocabulario : {index+1}</h6>
                   
                    <p><strong>V{ index+1 }={JSON.stringify(vocabulario,null,'  ')}</strong></p>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleDelete}></button>
            </div>
        </>
    )
}

export default Vocabularios
