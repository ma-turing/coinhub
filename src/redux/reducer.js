import { combineReducers } from "redux"
import * as types from "./actionTypes"

const initialState = {
    loading: false,
    assets: [],
    error: "",
    currentLimit: 20
}

const cryptoReducer = (state = initialState, action) => {
    const{type, payload} = action

    switch(type){
        case types.GET_CRYPTO_START:
            return {...state, loading: true}
        case types.GET_CRYPTO_SUCCESS:
            return {...state, loading: false, assets: payload}
        case types.GET_CRYPTO_FAIL:
            return {...state, loading: false, error: payload}
        case types.GET_CURRENT_LIMIT:
            return {...state, currentLimit: payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cryptoReducer,
})

export default rootReducer