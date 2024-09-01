import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {tickerListReducer} from './reducers/tickerReducers'
import {priceListReducer} from './reducers/priceReducers'
import {userLoginReducer} from './reducers/userReducers'



const reducer = combineReducers({
  tickerList: tickerListReducer,
  priceList: priceListReducer,
  userLogin: userLoginReducer,

});


const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : []

const initialState = {
  userLogin: { userInfo: userInfoFromStorage}

}
const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store