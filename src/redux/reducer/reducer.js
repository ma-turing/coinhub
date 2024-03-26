import { combineReducers } from "redux"
import assetsReducer from "./assetsReducer"
import assetHistoryReducer from "./assetHistoryReducer"

const rootReducer = combineReducers({
    assets: assetsReducer,
    assetHistory: assetHistoryReducer,
})

export default rootReducer