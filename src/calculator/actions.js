import {ADD_NUMBER, SUB_NUMBER} from "./constants";

export function addNumber (){
    return {
        type: ADD_NUMBER
    }
}

export function subNumber (){
    return {
        type: SUB_NUMBER
    }
}