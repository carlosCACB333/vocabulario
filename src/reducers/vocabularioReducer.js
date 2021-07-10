import { types } from "../types/types";

const initialState = {
    vocabularios: [],
    active:[]
}

const vocabularioReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.vocabularioAdd:
            return {
                ...state,
                vocabularios: [...state.vocabularios, action.payload]
            };
        case types.vocabularioActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.vocabularioAddCadena:
            return {
                ...state,
                vocabularios: state.vocabularios.map((value, index) => (index === action.payload.index ? [...value, action.payload.cadena] : value)),
                active: {
                    ...state.active,
                    vocabulario: [...state.active.vocabulario, action.payload.cadena],
                    size:state.active.vocabulario.length+1
                }
                
            }
            
        case types.vocabularioDelete:
            return {
                ...state,
                vocabularios: state.vocabularios.filter((value, index) => (index !== action.payload.index) ),
                active:[]
            }
    
        default:
            return state;
    }
}

export default vocabularioReducer;