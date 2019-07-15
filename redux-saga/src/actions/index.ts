import * as types from './types';
import {Memo} from '../models'

export interface FetchMemoListRequestAction {
  type: typeof types.FETCH_MEMO_LIST_REQUEST
}

export interface FetchMemoListSuccessAction {
  type: typeof types.FETCH_MEMO_LIST_SUCCESS
  payload: Memo[]
}

export interface FetchMemoListFailureAction {
  type: typeof types.FETCH_MEMO_LIST_FAILURE,
  payload: any
}

export const fetchMemoList = (): FetchMemoListRequestAction => ({
  type: types.FETCH_MEMO_LIST_REQUEST,
})

export interface FetchMemoAction {
  type: typeof types.FETCH_MEMO
  payload: Memo
}

export const fetchMemo = (memo: Memo): FetchMemoAction => ({
  type: types.FETCH_MEMO,
  payload: memo
})

export interface FetchDeletedMemoAction {
  type: typeof types.FETCH_DELETED_MEMO
  payload: Memo
}

export const fetchDeletedMemo = (memo: Memo): FetchDeletedMemoAction => ({
  type: types.FETCH_DELETED_MEMO,
  payload: memo
})

export interface FetchDeletedMemoListAction {
  type: typeof types.FETCH_DELETED_MEMO_LIST
  payload: Memo[]
}

export const fetchDeletedMemoList = (memos: Memo[]): FetchDeletedMemoListAction => ({
  type: types.FETCH_DELETED_MEMO_LIST,
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

export interface DeleteMemoAction {
  type: typeof types.DELETE_MEMO
  payload: number
}

export const deleteMemo = (id: number): DeleteMemoAction => ({
  type: types.DELETE_MEMO,
  payload: id
})

export interface RestoreMemoAction {
  type: typeof types.RESTORE_MEMO
  payload: number
}

export const restoreMemo = (id: number): RestoreMemoAction => ({
  type: types.RESTORE_MEMO,
  payload: id
})


export type MemoActionTypes = FetchMemoListRequestAction 
  | FetchMemoListSuccessAction
  | FetchMemoListFailureAction
  | FetchDeletedMemoListAction
  | FetchDeletedMemoAction
  | FetchMemoAction
  | AddMemoAction
  | DeleteMemoAction
  | RestoreMemoAction
  