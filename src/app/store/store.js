import { createStore } from 'redux';
import rootReducer from '../reducers/reducers'; // Adjust the path accordingly

const store = createStore(rootReducer);

export default store;
