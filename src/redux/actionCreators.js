import axios from "axios"
import * as types from "./actionTypes"

export const getCurrentLimit = (value) => ({
    type: types.GET_CURRENT_LIMIT,
    payload: value
})

export const getAssets = (currentLimit) => {
    return async (dispatch) => {
        dispatch({type: types.GET_ASSETS_START})
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/assets`, {params: {limit: currentLimit}})
            dispatch({type: types.GET_ASSETS_SUCCESS, payload: response.data.data})
        } catch (error) {
            dispatch({type: types.GET_ASSETS_FAIL, payload: error.message})
        }
    }
}

export const getAssetHistory = (assetId) => {
    return async (dispatch) => {
        dispatch({type: types.GET_ASSET_HISTORY_START})
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/assets/${assetId}/history`, {params: {interval: "m1"}})
            dispatch({type: types.GET_ASSET_HISTORY_SUCCESS, payload: response.data.data})
        } catch (error) {
            dispatch({type: types.GET_ASSET_HISTORY_FAIL, payload: error.message})
        }
    }
}
