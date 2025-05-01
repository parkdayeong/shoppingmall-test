import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authenticateReducer from './authenticateReducer';

const rootReducer = combineReducers({
  products: productReducer,
  login: authenticateReducer,
});

export default rootReducer;
