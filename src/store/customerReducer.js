const defaultState = {
    customers: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const addCustomerAction = (customer) => ({type: ADD_CUSTOMER, payload: customer});
export const removeCustomerAction = (customerId) => ({type: REMOVE_CUSTOMER, payload: customerId});
export const addManyCustomersAction = (customersList) => ({type: ADD_MANY_CUSTOMERS, payload: customersList});

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            console.log(action.payload);
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER :
            return {...state, customers: [...state.customers, action.payload]};
        case REMOVE_CUSTOMER :
            return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]};
        default:
            return state;
    }
}


