import { types } from "../types/types";


export const countReducer = (state = { cantidad: 0 }, action) => {
    switch (action.type) {
        case types.counterAdd:
            return {
                ...state,
                cantidad:action.payload.cantidad
            }
            
    
        default:
            return state;
    }
}