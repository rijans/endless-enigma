import {ADD_ICECREAM, SUB_ICECREAM} from "./constants";

const initialIceCreamState = {
    iceCreamNumber: 10
}

export default function iceCreamReducer(state = initialIceCreamState, action) {
    switch (action.type) {
        case ADD_ICECREAM:
            return {
                ...state,
                iceCreamNumber: state.iceCreamNumber + 1
            }
        case SUB_ICECREAM:
            return {
                ...state,
                iceCreamNumber: state.iceCreamNumber - 1
            }
        default:
            return state;
    }
}