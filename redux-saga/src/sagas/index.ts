import { all, fork } from 'redux-saga/effects'
import memoSaga from './memo'
import appSaga from './app'

export default function* rootSaga() {
  yield all([
    fork(memoSaga),
    fork(appSaga),
  ])
}