import axios from "axios"
import * as types from "./actionTypes"

export const getCurrentLimit = (value) => ({
    type: types.GET_CURRENT_LIMIT,
    payload: value
})

export const getCryptocurrencies = (currentLimit) => {
    return async (dispatch) => {
        dispatch({type: types.GET_CRYPTO_START})
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/assets`, {params: {limit: currentLimit}})
            dispatch({type: types.GET_CRYPTO_SUCCESS, payload: response.data.data})
        } catch (error) {
            dispatch({type: types.GET_CRYPTO_FAIL, payload: error.message})
        }
    }
}
