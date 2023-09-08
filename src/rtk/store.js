import {configureStore,combineReducers} from "@reduxjs/toolkit"
import TodoReducer from "./slices/todo-slice"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import persistConfig from "../persistConfig"




const reducer = combineReducers({
    todo:TodoReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer:persistedReducer
})
