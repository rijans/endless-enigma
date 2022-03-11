import './index.css'
import BlogHome from './blog/BlogHome';
import styles from './app.module.css'
import {Provider} from "react-redux";
import store from "./redux/store";
import CalculatorIcecream from "./calculator-ice/CalculatorIcecream";


function App() {
    // const store = createStore(reducer)
    console.log(store.getState())
    return (
        <Provider store={store}>
            <div className={'App'}>
                <BlogHome/>
                <CalculatorIcecream></CalculatorIcecream>
            </div>
        </Provider>
    );
}

export default App;
