import { types } from "../types/types"

export const startAddCount = (cantidad) => ({
    type: types.counterAdd,
    payload:{cantidad}        
})