import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true
});

const configureStore = () => {
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        logger,
        routerMiddleware(history),
      ),
    ),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
