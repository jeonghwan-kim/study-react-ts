import { all, fork } from 'redux-saga/effects'
import memoSaga from './memo'


export default function* rootSaga() {
  yield all([
    fork(memoSaga)
  ])
}