import React from 'react';
import {connect} from "react-redux";
import {addNumber, multiplyByTwo, subNumber} from "./actions";
import {compose} from "redux";
import calculatorReducer from "./calculatorReducer";

function Calculator({number, increment, decrement, multiplyByTwo}) {
    return (
        <div className={"m-10"}>
            <label>{number}</label>
            <button type="submit" onClick={increment}
                    className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'+'}
            </button>
            <button type="submit" onClick={decrement}
                    className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'-'}
            </button>
            <button type="submit" onClick={multiplyByTwo}
                    className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'Multiply by 2'}
            </button>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        number: state.calculatorReducer.number,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(addNumber()),
        decrement: () => dispatch(subNumber()),
        multiplyByTwo: () => dispatch(multiplyByTwo()),
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect)(Calculator);