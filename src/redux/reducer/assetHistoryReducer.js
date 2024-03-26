import * as types from "../actionTypes"

const initialState = {
    loading: false,
    history: [],
    error: "",
}

const assetHistoryReducer = (state = initialState, action) => {
    const{type, payload} = action

    switch(type){
        case types.GET_ASSET_HISTORY_START:
            return {...state, loading: true}
        case types.GET_ASSET_HISTORY_SUCCESS:
            return {...state, loading: false, assets: payload}
        case types.GET_ASSET_HISTORY_FAIL:
            return {...state, loading: false, error: payload}
        default:
            return state
    }
}

export default assetHistoryReducer