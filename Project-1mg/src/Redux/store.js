import { applyMiddleware, compose, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as Adminreducer } from "./AdminRedux/reducer";
import {reducer as DiseaseReducer} from "./Diseases_Redux/reducer";
import {reducer as Homereducer }   from "./HomeProducts/reducer";
import {Product_Reducer as Productreducer} from "./Product_Redux/product_reducer";
// import {reducer as Medicalreducer} from "./Reudcer_Medicine/reducer";

const rootReducer = combineReducers({Adminreducer, DiseaseReducer, Homereducer,Productreducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;




const store = legacy_createStore(rootReducer,
   composeEnhancers(applyMiddleware(thunk)) );

export {store};

