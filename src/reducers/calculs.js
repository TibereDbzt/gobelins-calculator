import mathItUp from "../utils/mathItUp";

const stateInit = {
    result: 0,
    currentNumber: '',
    operatorFunction: mathItUp['+'],
    stringCalcul: '',
    calculated: false,
};

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case "ADD_NUMBER":
            const { number } = action.payload;
            const lastNumberIsZero = state.currentNumber === '0';

            return {
                ...state,
                currentNumber: lastNumberIsZero ? number : state.currentNumber + number,
                stringCalcul: lastNumberIsZero ? state.stringCalcul.slice(0, -1) + number : state.stringCalcul + number,
                calculated: false,
            }

        case "ADD_OPERATOR":
            const { operator } = action.payload;
            const result = state.currentNumber === ''
                ? state.result
                : state.operatorFunction(parseInt(state.result, 10), parseInt(state.currentNumber, 10));

            return {
                ...state,
                result: result,
                operatorFunction: mathItUp[operator],
                currentNumber: '',
                stringCalcul: result + ' ' + operator + ' ',
            }

        case "EQUALS":

            return {
                ...state,
                result: state.currentNumber === ''
                    ? state.result
                    : state.operatorFunction(parseInt(state.result, 10), parseInt(state.currentNumber, 10)),
                stringCalcul: '',
                currentNumber: '',
                operatorFunction: mathItUp['+'],
                calculated: true,
            }

        default:
            return state;
    }

};

export default reducer;
