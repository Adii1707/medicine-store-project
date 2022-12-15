import { Product_Reducer } from "./Product_Redux/product_reducer";
import {combineReducers,legacy_createStore,applyMiddleware, compose } from "redux"
const rootreducer=combineReducers({
    productdata:Product_Reducer
 })
 const customMiddleware=(store)=>(next)=>(action)=>{
    if(typeof action==="function"){
    return action(store.dispatch)
    }
    return next(action)
    }
    const store=legacy_createStore(rootreducer,compose(applyMiddleware(customMiddleware)))
export {store}
