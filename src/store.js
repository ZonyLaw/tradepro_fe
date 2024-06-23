import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {tickerListReducer} from './reducers/tickerReducer'



const reducer = combineReducers({
  tickerList: tickerListReducer,
});


const middleware = [thunk]


const store = createStore(reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store