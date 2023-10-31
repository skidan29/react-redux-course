const defaultState = {
    cash: 0,
}

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export const addCashAction = (sum) => ({type: ADD_CASH, payload: sum})

export const getCashAction = (sum) => ({type: GET_CASH, payload: sum})

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH :
            return {...state, cash: state.cash + action.payload};
        case GET_CASH :
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}
