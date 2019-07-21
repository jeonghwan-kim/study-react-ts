import * as types from '../actions/types'
import {FetchMemoListRequestAction, AddMemoAction} from '../actions'

export interface AppState {
  apiCalling: boolean
}

const initialState: AppState = {
  apiCalling: false
}

interface ClearApiCallStatusAction {
  type: typeof types.CLEAR_API_CALL_STATUS
}

type AppActionTypes = ClearApiCallStatusAction
  | FetchMemoListRequestAction
  | AddMemoAction

const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST_REQUEST: 
    case types.ADD_MEMO_REQUEST: 
      return {
        ...state,
        apiCalling: true
      }
    case types.CLEAR_API_CALL_STATUS: 
      return {
        ...state,
        apiCalling: false
      }
    default: 
      return state
  }
}

export default appReducer
