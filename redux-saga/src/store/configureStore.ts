import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        logger,
      ),
    ),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
