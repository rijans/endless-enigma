import {ADD_NUMBER, MULTIPLY_BY_TWO, SUB_NUMBER} from "./constants";

export function addNumber() {
    return {type: ADD_NUMBER}
}

export function subNumber() {
    return {type: SUB_NUMBER}
}

export function multiplyByTwo() {
    return {type: MULTIPLY_BY_TWO}
}