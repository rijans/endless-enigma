import {ADD_ICECREAM, SUB_ICECREAM} from "./constants";

export function addIceCream() {
    return {type: ADD_ICECREAM}
}

export function subIceCream() {
    return {type: SUB_ICECREAM}
}
