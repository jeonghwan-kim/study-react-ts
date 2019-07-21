import { takeLatest, all, call, put } from 'redux-saga/effects'
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
  RESTORE_MEMO_FAILURE,
  CLEAR_API_CALL_STATUS
} from '../actions/types';
import {
  FetchMemoAction,
  FetchDeletedMemoAction,
  AddMemoAction,
  DeleteMemoAction,
  RestoreMemoAction
} from '../actions';
import { push } from 'connected-react-router';


export default function* memoSaga() {
  yield all([
    takeLatest(FETCH_MEMO_LIST_REQUEST, fetchMemoList$),
    takeLatest(FETCH_DELETED_MEMO_LIST_REQUEST, fetchDeletedMemoList$),
    takeLatest(FETCH_MEMO_REQUEST, fetchMemo$),
    takeLatest(FETCH_DELETED_MEMO_REQUEST, fetchDeletedMemo$),
    takeLatest(ADD_MEMO_REQUEST, addMemo$),
    takeLatest(DELETE_MEMO_REQUEST, deleteMemo$),
    takeLatest(RESTORE_MEMO_REQUEST, restoreMemo$),
  ])
}

function* fetchMemoList$() {
  try {
    const memos = yield call(api.fetchMemoList)
    yield put({ type: FETCH_MEMO_LIST_SUCCESS, payload: memos })
  } catch (err) {
    yield put({ type: FETCH_MEMO_LIST_FAILURE, payload: err })
  } finally {
    yield put({ type: CLEAR_API_CALL_STATUS })
  }
}

function* fetchDeletedMemoList$() {
  try {
    const memos = yield call(api.fetchDeletedMemoList)
    yield put({ type: FETCH_DELETED_MEMO_LIST_SUCCESS, payload: memos })
  } catch (err) {
    yield put({ type: FETCH_MEMO_LIST_FAILURE, payload: err })
  }
}

function* fetchMemo$(action: FetchMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const memo = yield call(api.fetchMemo, payload)
    yield put({ type: FETCH_MEMO_SUCCESS, payload: memo })
  } catch (err) {
    yield put({ type: FETCH_MEMO_FAILURE, payload: err })
  }
}

function* fetchDeletedMemo$(action: FetchDeletedMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const memo = yield call(api.fetchMemo, payload)
    yield put({ type: FETCH_DELETED_MEMO_SUCCESS, payload: memo })
  } catch (err) {
    yield put({ type: FETCH_DELETED_MEMO_FAILURE, payload: err })
  }
}

function* addMemo$(action: AddMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const memo = yield call(api.addMemo, payload)
    yield put({ type: ADD_MEMO_SUCCESS, payload: memo })
    yield put({ type: CLEAR_API_CALL_STATUS })

    // TODO 토스트로 변경 
    yield call(window.alert, '메모가 생성되었습니다. 메뉴 수정 화면으로 이동합니다.')
    yield put(push(`/memo/${memo.id}`))
  } catch (err) {
    yield put({ type: ADD_MEMO_FAILURE, paylaod: err })
  }
}

function* deleteMemo$(action: DeleteMemoAction) {
  const { payload } = action;
  if (!payload) return;

  try {
    const confirmDelete: boolean = yield call(window.confirm, '이 메모를 삭제할까요?')
    if (confirmDelete) {
      yield call(api.deleteMemo, payload)
      yield put({ type: DELETE_MEMO_SUCCESS, payload: payload })
      yield put(push('/memo'))
    } else {
      yield put({ type: DELETE_MEMO_FAILURE })
    }
  } catch (err) {
    yield put({ type: DELETE_MEMO_FAILURE, payload: err })
  } finally {
    yield put({ type: CLEAR_API_CALL_STATUS })
  }
}

function* restoreMemo$(action: RestoreMemoAction) {
  const { payload } = action
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
