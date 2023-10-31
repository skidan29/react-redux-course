import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);

    return (
        <div className="App">
            <h1>REACT REDUX COURSE</h1>
            <h2>Cash: {cash}</h2>

            <button onClick={()=>dispatch({type: 'ADD_CASH', payload: 1})}>Пополнить баланс</button>
            <button onClick={()=>dispatch({type: 'GET_CASH', payload: 1})}>Снять наличные</button>
        </div>
    );
}

export default App;
