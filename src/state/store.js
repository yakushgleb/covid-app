import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import appReducer from "./reducer"

let store = createStore(appReducer, applyMiddleware(thunk))
window.store = store

export default store