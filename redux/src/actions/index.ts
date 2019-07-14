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


export type MemoActionTypes = FetchMemoListAction 
  | FetchDeletedMemoListAction
  | FetchDeletedMemoAction
  | FetchMemoAction
  | AddMemoAction
  | DeleteMemoAction
  | RestoreMemoAction
  