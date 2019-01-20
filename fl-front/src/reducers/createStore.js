import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers'

/* Redux Debugger for Chrome */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(ReduxThunk)
    )
  )

  return store;
}