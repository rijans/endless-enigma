import React from 'react';

function Calculator(props) {
    return (
        <div className={"m-10"}>
            <label>0</label>
            <button type="submit"
                    className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'+'}
            </button>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{'-'}
            </button>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        number: state.number
    };
}

export default Calculator;