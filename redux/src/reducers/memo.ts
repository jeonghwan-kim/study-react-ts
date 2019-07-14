import {Memo} from '../models'
import * as types from '../actions/types'
import {MemoActionTypes} from '../actions'

export interface MemoState {
  memos: Memo[],
  deletedMemos: Memo[],
}

const initialState: MemoState = {
  memos: [],
  deletedMemos: [],
}

const memoReducer = (state = initialState, action: MemoActionTypes): MemoState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST: 
      return {
        ...state,
        memos: action.payload
      }
    case types.FETCH_DELETED_MEMO_LIST:
      return {
        ...state,
        deletedMemos: action.payload
      }
    case types.FETCH_MEMO:
      return {
        ...state,
        memos: state.memos.map(memo => {
          if (memo.id !== action.payload.id) return memo
          return { ...action.payload }
        })
      }
    case types.FETCH_DELETED_MEMO:
      return {
        ...state,
        deletedMemos: state.deletedMemos.map(memo => {
          if (memo.id !== action.payload.id) return memo
          return { ...action.payload }
        })
      }
    case types.ADD_MEMO:
      return {
        ...state,
        memos: [action.payload, ...state.memos]
      }
    case types.DELETE_MEMO:
      if (!action.payload) return state;
      return {
        ...state,
        memos: state.memos.filter(memo => {
          return memo.id !== action.payload
        })
      }
    case types.RESTORE_MEMO:
      if (!action.payload) return state;
      return {
        ...state,
        deletedMemos: state.deletedMemos.filter(memo => {
          return memo.id !== action.payload
        })
      }
    default: 
      return state
  }
}

export default memoReducer
