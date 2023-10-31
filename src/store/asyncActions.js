import {addManyCustomersAction} from "./customerReducer";

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)));
    }
}
