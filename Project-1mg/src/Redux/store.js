import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk";
import { reducer } from "./AdminRedux/reducer";
import { Product_Reducer } from "./Product_Redux/product_reducer";
const rootreducer=combineReducers({
productdata:Product_Reducer
})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk));

export { store };