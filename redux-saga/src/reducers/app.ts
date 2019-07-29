import * as types from '../actions/types'
import {
  FetchMemoListAction, 
  AddMemoAction, 
  DeleteMemoAction
} from './memo'
import { Toast, Dialog } from '../models';

export interface AppState {
  apiCalling: boolean,
  toasts: Toast[],
  dialog?: Dialog,
}

const initialState: AppState = {
  apiCalling: false,
  toasts: [],
  dialog: undefined
}

export interface ClearApiCallStatusAction {
  type: typeof types.CLEAR_API_CALL_STATUS
}

export interface ShowToastAction {
  type: typeof types.SHOW_TOAST,
  payload: string
}

export interface AddToastAction {
  type: typeof types.ADD_TOAST,
  payload: Toast
}

export interface RemoveToastAction {
  type: typeof types.REMOVE_TOAST,
  payload: number
}

export interface ShowDialolgAction {
  type: typeof types.SHOW_DIALOG,
  payload: Dialog
}

export interface ConfirmDialogAction {
  type: typeof types.CONFIRM_DIALOG
}

export interface CancelDialogAction {
  type: typeof types.CANCEL_DIALOG
}


type AppActionTypes = ClearApiCallStatusAction
  | FetchMemoListAction
  | AddMemoAction
  | DeleteMemoAction
  | AddToastAction
  | RemoveToastAction
  | ShowDialolgAction
  | ConfirmDialogAction
  | CancelDialogAction

const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST_REQUEST: 
    case types.ADD_MEMO_REQUEST: 
    case types.DELETE_MEMO_REQUEST: 
      return {
        ...state,
        apiCalling: true
      }
    case types.CLEAR_API_CALL_STATUS: 
      return {
        ...state,
        apiCalling: false
      }
    case types.ADD_TOAST: 
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      }
    case types.REMOVE_TOAST:
      const toastId = action.payload;
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== toastId)
      }
    case types.SHOW_DIALOG: 
      return {
        ...state,
        dialog: action.payload
      }
    case types.CONFIRM_DIALOG:
    case types.CANCEL_DIALOG:
      return {
        ...state,
        dialog: undefined
      }
    default: 
      return state
  }
}

export default appReducer
