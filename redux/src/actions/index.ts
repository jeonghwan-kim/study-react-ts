import * as types from './types';
import {Memo} from '../models'

export interface FetchMemoListAction {
  type: typeof types.FETCH_MEMO_LIST
  payload: Memo[]
}

export const fetchMemoList = (memos: Memo[]): FetchMemoListAction => ({
  type: types.FETCH_MEMO_LIST,
  payload: memos
})

export interface AddMemoAction {
  type: typeof types.ADD_MEMO
  payload: Memo
}

export const addMemo = (memo: Memo): AddMemoAction => ({
  type: types.ADD_MEMO,
  payload: memo
})

export type MemoActionTypes = FetchMemoListAction | AddMemoAction
