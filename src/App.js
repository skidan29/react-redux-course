import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {ADD_CUSTOMER, addCustomerAction, REMOVE_CUSTOMER, removeCustomerAction} from "./store/customerReducer";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const [customer, setCustomer] = useState('');

    const addCustomer = () => {
        dispatch(addCustomerAction({name: customer, id: Date.now()}));
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    return (
        <div className="App">
            <h1>REACT REDUX COURSE</h1>
            <h2>Cash: {cash}</h2>

            <button onClick={() => dispatch({type: 'ADD_CASH', payload: 1})}>Пополнить баланс</button>
            <button onClick={() => dispatch({type: 'GET_CASH', payload: 1})}>Снять наличные</button>

            <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)}/>

            <button onClick={addCustomer}>Добавить клиента
            </button>

            {
                customers.length ?
                    customers.map((customer, customerIdx) => <div key={customerIdx}>{customer.name}
                        <button onClick={() => removeCustomer(customer.id)}>delete
                        </button>
                    </div>) :
                    <div>Клиенты отсутствуют</div>
            }
        </div>
    );
}

export default App;
