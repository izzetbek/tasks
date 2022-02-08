import { all, fork } from 'redux-saga/effects'
import { watchTasks } from 'store/tasks/sagas'

export default function* () {
  yield all([fork(watchTasks)])
}
