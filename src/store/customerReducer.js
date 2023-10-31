const defaultState = {
    customers: []
}

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const addCustomerAction = (customer) => ({type: ADD_CUSTOMER, payload: customer});
export const removeCustomerAction = (customerId) => ({type: REMOVE_CUSTOMER, payload: customerId});

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER :
            return {...state, customers: [...state.customers, action.payload]};
        case REMOVE_CUSTOMER :
            return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]};
        default:
            return state;
    }
}


