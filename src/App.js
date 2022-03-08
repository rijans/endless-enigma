import './index.css'
import BlogHome from './blog/BlogHome';
import styles from './app.module.css'
import {Provider} from "react-redux";
import store from "./calculator/store";
import Calculator from "./calculator/Calculator";


function App() {
    return (
        <Provider store={store}>
            <div className={'App'}>
                {/*<BlogHome/>*/}
                <Calculator/>
            </div>
        </Provider>
    );
}

export default App;
