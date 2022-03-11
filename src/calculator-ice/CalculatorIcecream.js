import React from 'react';
import {connect} from "react-redux";
import {addIceCream, subIceCream} from "./actions";
import {compose} from "redux";
import iceCreamReducer from "./calculatorReducer";

function CalculatorIceCream({iceCreamNumber, incrementIceCream, decrementIceCream}) {
    return (
        <div className={"m-10"}>
            <label>{iceCreamNumber}</label>
            <button type="submit" onClick={incrementIceCream}
                    className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'+'}
            </button>
            <button type="submit" onClick={decrementIceCream}
                    className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'-'}
            </button>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        iceCreamNumber: state.iceCreamReducer.iceCreamNumber,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementIceCream: () => dispatch(addIceCream()),
        decrementIceCream: () => dispatch(subIceCream()),
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect)(CalculatorIceCream);