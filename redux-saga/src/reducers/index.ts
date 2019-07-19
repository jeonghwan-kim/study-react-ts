import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import memo, { MemoState } from './memo'
import app, { AppState } from './app'

export interface RootState {
  memo: MemoState,
  app: AppState
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  memo,
  app,
})

export default rootReducer
