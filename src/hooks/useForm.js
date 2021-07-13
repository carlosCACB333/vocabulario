import {useState} from 'react'

const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

    const reset = (newwState = initialState) => {
        setValues(newwState);
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    

    return [values, handleInputChange, reset];
}

export default useForm