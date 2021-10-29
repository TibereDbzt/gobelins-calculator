import { ADD_NUMBER, ADD_OPERATOR, EQUALS } from '../constants/actions';

export const addNumber = payload => ({type: ADD_NUMBER, payload});
export const addOperator = payload => ({type: ADD_OPERATOR, payload});
export const equals = payload => ({type: EQUALS, payload});
