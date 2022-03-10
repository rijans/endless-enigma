import './index.css'
import BlogHome from './blog/BlogHome';
import styles from './app.module.css'
import {Provider} from "react-redux";
import store from "./calculator/store";


function App() {
    return (
        <Provider store={store}>
            <div className={'App'}>
                <BlogHome/>
            </div>
        </Provider>
    );
}

export default App;
