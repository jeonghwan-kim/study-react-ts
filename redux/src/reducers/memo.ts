import {Memo} from '../models'
import * as types from '../actions/types'
import {MemoActionTypes} from '../actions'

export interface MemoState {
  memos: Memo[]
}

const initialState: MemoState = {
  memos: []
}

const memoReducer = (state = initialState, action: MemoActionTypes): MemoState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST: 
      return {
        memos: action.payload
      }
    case types.ADD_MEMO:
      return {
        memos: [...state.memos, action.payload]
      }
    default: 
      return state
  }
}

export default memoReducer
