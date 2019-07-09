import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './routes';
import { createStore, combineReducers } from 'redux'
import { Memo } from './models'
import { stat } from 'fs';
import { Provider } from 'react-redux';

interface MemoState {
  memos: Memo[]
}

const FETCH_MEMO_LIST = 'FETCH_MEMO_LIST'
const ADD_MEMO = 'ADD_MEMO'

export interface FetchMemoListAction {
  type: typeof FETCH_MEMO_LIST
  payload: Memo[]
}

 interface AddMemoAction {
  type: typeof ADD_MEMO
  payload: Memo
}

export const fetchMemoList = (memos: Memo[]): FetchMemoListAction => ({
  type: FETCH_MEMO_LIST,
  payload: memos
})

const addMemo = (memo: Memo): AddMemoAction => ({
  type: ADD_MEMO,
  payload: memo
})

const initialState: MemoState = {
  memos: []
}

type MemoActionTypes = FetchMemoListAction | AddMemoAction

const memoReducer = (
  state = initialState,
  action: MemoActionTypes
): MemoState => {
  switch (action.type) {
    case FETCH_MEMO_LIST: 
      return {
        memos: action.payload
      }
    case ADD_MEMO:
      return {
        memos: [...state.memos, action.payload]
      }
    default: 
      return state
  }
}

const rootReducer = combineReducers({
  memo: memoReducer
})

const store = createStore(rootReducer)


// TODO ReturnType 알아볼 것 
export type AppState = ReturnType<typeof rootReducer>

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);