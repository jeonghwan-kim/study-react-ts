import * as types from './types';
import {Memo} from '../models'
import { RemoveToastAction } from '../reducers/app';

export interface FetchMemoListRequestAction {
  type: typeof types.FETCH_MEMO_LIST_REQUEST
}

export const fetchMemoList = (): FetchMemoListRequestAction => ({
  type: types.FETCH_MEMO_LIST_REQUEST,
})

export interface FetchDeletedMemoListAction {
  type: typeof types.FETCH_DELETED_MEMO_LIST_REQUEST
}

export const fetchDeletedMemoList = (): FetchDeletedMemoListAction => ({
  type: types.FETCH_DELETED_MEMO_LIST_REQUEST,
})

export interface FetchMemoAction {
  type: typeof types.FETCH_MEMO_REQUEST
  payload: number
}

export const fetchMemo = (id: number): FetchMemoAction => ({
  type: types.FETCH_MEMO_REQUEST,
  payload: id
})

export interface FetchDeletedMemoAction {
  type: typeof types.FETCH_DELETED_MEMO_REQUEST,
  payload: number
}

export const fetchDeletedMemo = (id: number): FetchDeletedMemoAction => ({
  type: types.FETCH_DELETED_MEMO_REQUEST,
  payload: id
})

export interface AddMemoAction {
  type: typeof types.ADD_MEMO_REQUEST
  payload: Memo
}

export const addMemo = (memo: Memo): AddMemoAction => ({
  type: types.ADD_MEMO_REQUEST,
  payload: memo
})

export interface DeleteMemoAction {
  type: typeof types.DELETE_MEMO_REQUEST
  payload: number
}

export const deleteMemo = (id: number): DeleteMemoAction => ({
  type: types.DELETE_MEMO_REQUEST,
  payload: id
})

export interface RestoreMemoAction {
  type: typeof types.RESTORE_MEMO_REQUEST
  payload: number
}

export const restoreMemo = (id: number): RestoreMemoAction => ({
  type: types.RESTORE_MEMO_REQUEST,
  payload: id
})

export const removeToast = (id: number): RemoveToastAction => ({
  type: types.REMOVE_TOAST,
  payload: id
})
  
export interface ShowMemoAction {
  type: typeof types.SHOW_TOAST,
  payload: string
}