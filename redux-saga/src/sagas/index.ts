import {takeEvery, call, put} from 'redux-saga/effects'
import * as api from '../apis'
import { 
  FETCH_MEMO_LIST_REQUEST, 
  FETCH_MEMO_LIST_SUCCESS,
  FETCH_MEMO_LIST_FAILURE
 } from '../actions/types';
function* rootSaga() {
  yield takeEvery(FETCH_MEMO_LIST_REQUEST, fetchMemoList$)
}

function* fetchMemoList$() {
  try {
    const memos = yield call(api.fetchMemoList)
    yield put({ 
      type: FETCH_MEMO_LIST_SUCCESS,
      payload: memos
    })
  } catch (err) {
    yield put({
      type: FETCH_MEMO_LIST_FAILURE,
      payload: err
    })
  }
}

export default rootSaga