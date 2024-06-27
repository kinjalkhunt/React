import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiReducer from './reducers/apireducer';

const rootReducer = combineReducers({
  api: apiReducer,
  // Add other reducers here if needed
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
