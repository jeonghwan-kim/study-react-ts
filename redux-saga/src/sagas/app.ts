import { all, takeEvery, put, delay} from 'redux-saga/effects'
import { ADD_TOAST, SHOW_TOAST, REMOVE_TOAST, SHOW_DIALOG } from '../actions/types';
import { ShowToastAction, ShowDialolgAction } from '../reducers/app';
import { isString } from 'util';

export default function* appSaga() {
  yield all([
    takeEvery(SHOW_TOAST, showToast$),

    // todo: any 제거 
    takeEvery((action: any) => {
      return action.type.endsWith('_FAILURE')
    }, handleFailure$)

  ])
}

let _id = 0

function* showToast$(action: ShowToastAction) {
  const nextId: number = _id + 1;
  _id = nextId;
  const text: string = action.payload
  yield put({ type: ADD_TOAST, payload: {id: nextId, text}})
  yield delay(3000)
  yield put({ type: REMOVE_TOAST, payload: nextId})
}


function* handleFailure$(action: {payload: any}) {
  const {payload} = action;

  if (isString(payload)) {
    yield put({ type: SHOW_TOAST, payload })
  }
}