import axios from "axios"
import * as types from "./actionTypes"

// export const increment = (value) => ({
//     type: types.INCREMENT_COUNT,
//     payload: value
// })

export const getCryptocurrencies = () => {
    return async (dispatch) => {
        dispatch({type: types.GET_CRYPTO_START})
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/assets`)
            dispatch({type: types.GET_CRYPTO_SUCCESS, payload: response.data.data})
        } catch (error) {
            dispatch({type: types.GET_CRYPTO_FAIL, payload: error.message})
        }
    }
}
