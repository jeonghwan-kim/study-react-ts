import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
  collapsed: true
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        logger,
      ),
    ),
  )
  return store
}

export default configureStore
