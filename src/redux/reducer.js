import { combineReducers } from "redux"
import * as types from "./actionTypes"

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    const{type, payload} = action

    switch(type){
        case types.INCREMENT_COUNT:
            return {...state, count: state.count + 1}
        case types.DECREMENT_COUNT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    countReducer,
})

export default rootReducer