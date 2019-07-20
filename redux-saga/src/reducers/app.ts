import * as types from '../actions/types'
import {FetchMemoListRequestAction} from '../actions'

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

const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST_REQUEST: 
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
