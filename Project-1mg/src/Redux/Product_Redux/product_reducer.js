import {PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR} from "./actionTypes";
const initial_state={
    productloading:false,
    producterror:false,
    products:[]
}
const Product_Reducer=(state=initial_state,action)=>{
    // console.log("jjj");
const {type,payload}=action;
switch(type){
   case PRODUCT_LOADING:return {...state,productloading:true}
   case PRODUCT_SUCCESS:return{...state,productloading:false,products:payload}
   case PRODUCT_ERROR:return {...state,productloading:false,producterror:true}
   default: return state
}
}
export {Product_Reducer}