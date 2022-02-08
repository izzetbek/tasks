import { put, takeEvery, call } from 'redux-saga/effects'
import {
  requestStarted,
  requestEnded,
  requestFailed,
  tasksRequested,
  tasksReceived,
  taskCreationRequested,
  taskAdded,
  subTasksRequested,
  subTasksReceived,
  subtaskDeleted,
  subtaskDeleteRequested,
} from 'store/tasks'
import { fetchTasks, createTask } from 'api/tasks'
import { deleteSubtask, fetchSubTasks } from 'api/subTasks'

export function* getTasks() {
  try {
    yield put(requestStarted())
    const tasks = yield call(fetchTasks)

    yield put(tasksReceived(tasks))
  } catch (e) {
    yield put(requestFailed(e.message))
  } finally {
    yield put(requestEnded())
  }
}

export function* addTask() {
  try {
    const task = yield call(createTask)

    yield put(taskAdded(task))
  } catch (e) {
    yield put(requestFailed(e.message))
  } finally {
    yield put(requestEnded())
  }
}

export function* getSubtasks(action) {
  try {
    const subtasks = yield call(fetchSubTasks, action.payload.id)

    yield put(subTasksReceived(subtasks))
  } catch (e) {
    yield put(requestFailed(e.message))
  } finally {
    yield put(requestEnded())
  }
}

export function* removeSubtask(action) {
  try {
    const subtask = yield call(deleteSubtask, action.payload.id)

    yield put(subtaskDeleted(subtask))
  } catch (e) {
    yield put(requestFailed(e.message))
  } finally {
    yield put(requestEnded())
  }
}

export function* watchTasks() {
  yield takeEvery(tasksRequested.type, getTasks)
  yield takeEvery(taskCreationRequested.type, addTask)
  yield takeEvery(subTasksRequested.type, getSubtasks)
  yield takeEvery(subtaskDeleteRequested.type, removeSubtask)
}
