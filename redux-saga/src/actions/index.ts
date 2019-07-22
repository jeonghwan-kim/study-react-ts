import * as types from './types';
import {Memo} from '../models'
import { RemoveToastAction } from '../reducers/app';
import { 
  FetchMemoListAction, 
  FetchDeletedMemoListAction,
  FetchMemoAction,
  FetchDeletedMemoAction,
  AddMemoAction,
  DeleteMemoAction,
  RestoreMemoAction,
} from '../reducers/memo';


export const fetchMemoList = (): FetchMemoListAction => ({
  type: types.FETCH_MEMO_LIST_REQUEST,
})

export const fetchDeletedMemoList = (): FetchDeletedMemoListAction => ({
  type: types.FETCH_DELETED_MEMO_LIST_REQUEST,
})

export const fetchMemo = (id: number): FetchMemoAction => ({
  type: types.FETCH_MEMO_REQUEST,
  payload: id
})

export const fetchDeletedMemo = (id: number): FetchDeletedMemoAction => ({
  type: types.FETCH_DELETED_MEMO_REQUEST,
  payload: id
})

export const addMemo = (memo: Memo): AddMemoAction => ({
  type: types.ADD_MEMO_REQUEST,
  payload: memo
})

export const deleteMemo = (id: number): DeleteMemoAction => ({
  type: types.DELETE_MEMO_REQUEST,
  payload: id
})

export const restoreMemo = (id: number): RestoreMemoAction => ({
  type: types.RESTORE_MEMO_REQUEST,
  payload: id
})

export const removeToast = (id: number): RemoveToastAction => ({
  type: types.REMOVE_TOAST,
  payload: id
})