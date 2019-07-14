import { combineReducers } from 'redux';
import memo, { MemoState } from './memo'

export interface RootState {
  memo: MemoState
}

const rootReducer = combineReducers({
  memo,
})

export default rootReducer
