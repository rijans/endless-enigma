import {createStore} from "redux";
import calculatorReducer from "./calculatorReducer";

const store = createStore(calculatorReducer);

export default store;