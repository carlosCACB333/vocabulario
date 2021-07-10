import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import vocabularioReducer from "../reducers/vocabularioReducer";
import thunk from "redux-thunk";
import { countReducer } from "../reducers/countReducer";


const reducers = combineReducers({
    vocabulario: vocabularioReducer,
    count:countReducer
    
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
   composeEnhancers(applyMiddleware(thunk))
)