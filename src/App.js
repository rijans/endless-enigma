import './index.css'
import BlogHome from './blog/BlogHome';
import styles from './app.module.css'
import {Provider} from "react-redux";
import store from "./redux/store";
import CalculatorIceCream from "./calculator-ice/CalculatorIceCream";


function App() {
    // const store = createStore(reducer)
    console.log(store.getState())
    return (
        <Provider store={store}>
            <div className={'App'}>
                <BlogHome/>
                <CalculatorIceCream></CalculatorIceCream>
            </div>
        </Provider>
    );
}

export default App;
