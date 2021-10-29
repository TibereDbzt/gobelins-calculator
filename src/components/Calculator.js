import { useDispatch, useSelector } from "react-redux";
import { addNumber, addOperator ,equals } from "../actions/actions-types";
import StyledButton from "../styles/Button";
import { StyledResult, StyledKeyboard } from "../styles/Calculator";

const Calculator = () => {

    const dispatch = useDispatch();
    const { calculated, result, stringCalcul } = useSelector((state) => state);

    const handleNumber = e => {
        const { value: number } = e.target;

        dispatch(addNumber({ number }));
    }

    const handleOperator = e => {
        const { value : operator } = e.target;

        dispatch(addOperator({ operator }));
    }

    const handleEquals = () => {
        dispatch(equals());
    }

    return (
        <>
            <StyledResult>{calculated ? result : stringCalcul}</StyledResult>
            <StyledKeyboard>
                {[...new Array(10)].map((_, i) => (
                    <StyledButton key={i} onClick={handleNumber} value={10 - (i + 1)}>{10 - (i + 1)}</StyledButton>
                ))}
            </StyledKeyboard>
            <StyledKeyboard>
                <StyledButton className="operator" onClick={handleOperator} value={"+"}>+</StyledButton>
                <StyledButton className="operator" onClick={handleOperator} value={"-"}>-</StyledButton>
                <StyledButton className="operator" onClick={handleOperator} value={"x"}>x</StyledButton>
            </StyledKeyboard>
            <StyledButton className="operator" onClick={handleEquals}>=</StyledButton>
        </>
    )
}

export default Calculator;
