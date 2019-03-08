import { createStore } from "redux";
import mainReducer from "./reducers/main";
const store = createStore(mainReducer);

if (module.hot) {
    module.hot.accept('./reducers/main', ()=>{
        const nextRootReducer = require('./reducers/main').default;
        store.replaceReducer(nextRootReducer)
    });
}
export default store;