import * as types from '../actions/types'
import {
  FetchMemoListRequestAction, 
  AddMemoAction, 
  DeleteMemoAction
} from '../actions'
import { Toast } from '../models';

export interface AppState {
  apiCalling: boolean,
  toasts: Toast[],
}

const initialState: AppState = {
  apiCalling: false,
  toasts: [],
}

export interface ClearApiCallStatusAction {
  type: typeof types.CLEAR_API_CALL_STATUS
}

export interface AddToastAction {
  type: typeof types.ADD_TOAST,
  payload: Toast
}

// 액션은 인터페이스는 모두 리듀서에서 정의? 
export interface RemoveToastAction {
  type: typeof types.REMOVE_TOAST,
  payload: number
}

type AppActionTypes = ClearApiCallStatusAction
  | FetchMemoListRequestAction
  | AddMemoAction
  | DeleteMemoAction
  | AddToastAction
  | RemoveToastAction

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
    default: 
      return state
  }
}

export default appReducer
