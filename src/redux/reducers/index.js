import { combineReducers } from 'redux';

import filter from './filter';
import product from './product';
import cart from './cart';

const rootReducer = combineReducers({
    filter,
    product,
    cart
});



export default rootReducer;