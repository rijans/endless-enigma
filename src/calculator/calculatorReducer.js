import {ADD_NUMBER, SUB_NUMBER} from "./constants";

const initialState = {
    number: 0
}

export default function calculatorReducer(initialState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...initialState,
                number: initialState.number + 1
            }
        case SUB_NUMBER:
            return {
                ...initialState,
                number: initialState.number - 1
            }
        default:
            return initialState;
    }
}