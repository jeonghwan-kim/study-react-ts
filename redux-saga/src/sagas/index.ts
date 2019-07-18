import {takeEvery, call, put} from 'redux-saga/effects'
import * as api from '../apis'
import { 
  FETCH_MEMO_LIST_REQUEST, 
  FETCH_MEMO_LIST_SUCCESS,
  FETCH_MEMO_LIST_FAILURE,
  FETCH_MEMO_REQUEST,
  FETCH_MEMO_SUCCESS,
  FETCH_MEMO_FAILURE,
  FETCH_DELETED_MEMO_LIST_REQUEST,
  FETCH_DELETED_MEMO_LIST_SUCCESS,
  FETCH_DELETED_MEMO_REQUEST,
  FETCH_DELETED_MEMO_SUCCESS,
  FETCH_DELETED_MEMO_FAILURE,
  ADD_MEMO_REQUEST,
  ADD_MEMO_SUCCESS,
  ADD_MEMO_FAILURE,
  DELETE_MEMO_REQUEST,
  DELETE_MEMO_SUCCESS,
  DELETE_MEMO_FAILURE,
  RESTORE_MEMO_REQUEST,
  RESTORE_MEMO_SUCCESS,
  RESTORE_MEMO_FAILURE
 } from '../actions/types';
import { FetchMemoAction, FetchDeletedMemoAction, AddMemoAction, DeleteMemoAction, RestoreMemoAction } from '../actions';

function* rootSaga() {
  yield takeEvery(FETCH_MEMO_LIST_REQUEST, fetchMemoList$)
  yield takeEvery(FETCH_DELETED_MEMO_LIST_REQUEST, fetchDeletedMemoList$)
  yield takeEvery(FETCH_MEMO_REQUEST, fetchMemo$)
  yield takeEvery(FETCH_DELETED_MEMO_REQUEST, fetchDeletedMemo$)
  yield takeEvery(ADD_MEMO_REQUEST, addMemo$)
  yield takeEvery(DELETE_MEMO_REQUEST, deleteMemo$)
  yield takeEvery(RESTORE_MEMO_REQUEST, restoreMemo$)
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

function* fetchDeletedMemoList$() {
  try {
    const memos = yield call(api.fetchDeletedMemoList)
    yield put({
      type: FETCH_DELETED_MEMO_LIST_SUCCESS,
      payload: memos
    })
  } catch (err) {
    yield put({
      type: FETCH_MEMO_LIST_FAILURE,
      payload: err
    })
  }
}

function* fetchMemo$(action: FetchMemoAction) {
  const {payload} = action;
  if (!payload) return;

  try {
    const memo = yield call(api.fetchMemo, payload)
    yield  put({
      type: FETCH_MEMO_SUCCESS,
      payload: memo
    })
  } catch (err) {
    yield put({
      type: FETCH_MEMO_FAILURE,
      payload: err
    })
  }
}

function* fetchDeletedMemo$(action: FetchDeletedMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const memo = yield call(api.fetchMemo, payload)
    yield put({
      type: FETCH_DELETED_MEMO_SUCCESS,
      payload: memo
    })
  } catch (err) {
    yield put({
      type: FETCH_DELETED_MEMO_FAILURE,
      payload: err
    })
  }
}

function* addMemo$(action: AddMemoAction) {
  const {payload} = action;
  if (!payload) return;

  try {
    const memo = yield call(api.addMemo, payload)
    yield put({
      type: ADD_MEMO_SUCCESS,
      payload: memo
    })

    // TODO 이펙트 처리로 하자 
    history.pushState({}, '', `/memo/${memo.id}` )
  } catch (err) {
    yield put({
      type: ADD_MEMO_FAILURE,
      paylaod: err
    })
  }
}

function* deleteMemo$(action: DeleteMemoAction) {
  const {payload} = action;
  if (!payload) return;

  try {
    yield call(api.deleteMemo, payload)
    yield put({
      type: DELETE_MEMO_SUCCESS,
      payload: payload
    })

    // todo
    history.pushState({}, '', `/memo`)
  } catch (err) {
    yield put({
      type: DELETE_MEMO_FAILURE,
      payload: err
    })
  }
}

function* restoreMemo$(action: RestoreMemoAction) {
  const {payload} = action
  if (!payload) return;

  try {
    yield call(api.resotreMemo, payload)
    yield put({
      type: RESTORE_MEMO_SUCCESS,
      payload
    })

    //todo 
    history.pushState({}, '', '/trash')
  } catch (err) {
    yield put({
      type: RESTORE_MEMO_FAILURE,
      payload: err
    })
  }
}

export default rootSaga