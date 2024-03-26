import * as types from "../actionTypes"

const initialState = {
    loading: false,
    assets: [],
    error: "",
    currentLimit: 20
}

const assetsReducer = (state = initialState, action) => {
    const{type, payload} = action

    switch(type){
        case types.GET_ASSETS_START:
            return {...state, loading: true}
        case types.GET_ASSETS_SUCCESS:
            return {...state, loading: false, assets: payload}
        case types.GET_ASSETS_FAIL:
            return {...state, loading: false, error: payload}
        case types.GET_CURRENT_LIMIT:
            return {...state, currentLimit: payload}
        default:
            return state
    }
}

export default assetsReducer