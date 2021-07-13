import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startVocabularioAddCadena } from '../actions/vocabulario'
import useForm from '../hooks/useForm'

const FormAddCadena = () => {
    const [values, handleInputChange,reset] = useForm({ cadena: '' })
    const dispatch = useDispatch();

    const vocabulario = useSelector(state => state.vocabulario)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startVocabularioAddCadena(vocabulario.active.index, values.cadena));
        reset();

    }
    
    return (
         <form className=" g-3  text-center p-5 " onSubmit={handleSubmit}>
    
                <h4>Ingresar símbolos</h4>
                <div className="row">
                    <label className=" col-sm-12 col-lg-3 col-form-label text-white">Símbolo</label>
                    <div className=" col-sm-12 col-lg-6">
                    <input type="text" className="form-control bg-transparent text-white" name='cadena' onChange={handleInputChange} value={values.cadena} autoComplete='off'/>
                    </div>
                    <div className=' col-sm-12 col-lg-3'>
                        <button
                            type='submit'
                            className='btn btn-primary my-1'
                        >
                            agregar
                        </button>
                    </div>
                </div>

        </form>
    )
}

export default FormAddCadena
