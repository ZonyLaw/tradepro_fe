import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {tickerListReducer} from './reducers/tickerReducers'
import {priceListReducer} from './reducers/priceReducers'



const reducer = combineReducers({
  tickerList: tickerListReducer,
  priceList: priceListReducer,
});

const initialState = {}
const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store