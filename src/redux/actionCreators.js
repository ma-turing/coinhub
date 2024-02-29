import * as types from "./actionTypes"

export const increment = (value) => ({
    type: types.INCREMENT_COUNT,
    payload: value
})

export const decrement = (value) => ({
    type: types.DECREMENT_COUNT,
    payload: value
})
