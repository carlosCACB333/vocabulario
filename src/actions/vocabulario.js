import { types } from "../types/types";

export const startAddVocabulario = () => (
    {
        type: types.vocabularioAdd,
        payload: []
    }
);


export const startActiveVocabulario = (index, vocabulario) => (
    {
        type: types.vocabularioActive,
        payload: {
            index,
            vocabulario,
            size:vocabulario.length
        }
    }
)


export const startVocabularioAddCadena = (index, cadena) => (
    {
        type: types.vocabularioAddCadena,
        payload: {
            index,cadena
        }
    }
)

export const startVocabularioDelete = (index) => (
    {
        type: types.vocabularioDelete,
        payload:{index}
    }
)