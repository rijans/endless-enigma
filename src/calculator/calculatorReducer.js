import {ADD_NUMBER, MULTIPLY_BY_TWO, SUB_NUMBER} from "./constants";

const initialState = {
    number: 0
}

export default function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                number: state.number + 1
            }
        case SUB_NUMBER:
            return {
                ...state,
                number: state.number - 1
            }
        case MULTIPLY_BY_TWO:
            return {
                ...state,
                number: state.number * 2
            }
        default:
            return state;
    }
}