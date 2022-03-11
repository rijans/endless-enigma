import calculatorReducer from "../calculator/calculatorReducer";
import {combineReducers} from "redux";
import iceCreamReducer from "../calculator-ice/calculatorReducer";
import blogReducer from "../blog-with-redux/blogReducer";

const rootReducer = combineReducers({
    blogReducer,
    calculatorReducer,
    iceCreamReducer
});
;
export default rootReducer;