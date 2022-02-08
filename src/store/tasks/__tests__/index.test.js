// noinspection JSCheckFunctionSignatures

import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { addTask, getSubtasks, getTasks, removeSubtask } from 'store/tasks/sagas'
import { fetchTasks, createTask } from 'api/tasks'
import { deleteSubtask, fetchSubTasks } from 'api/subTasks'
import {
  subtaskDeleted,
  subtaskDeleteRequested,
  subTasksReceived,
  subTasksRequested,
  taskAdded,
  taskCreationRequested,
  tasksReceived,
  tasksRequested,
} from 'store/tasks/index'

const fakeTasks = [
  {
    id: 1,
    createTime: 12361231,
    title: 'test 1',
  },
  {
    id: 2,
    createTime: 12363231,
    title: 'test 2',
  },
]

const fakeSubtasks = [
  {
    id: 11,
    taskId: 1,
    createTime: 19961231,
    title: 'test 1',
    labels: new Set(['test', 'subtask', '1']),
  },
  {
    id: 22,
    taskId: 2,
    createTime: 12653231,
    title: 'test 2',
    labels: new Set(['test', 'subtask', '2']),
  },
]

describe('tasks slice', () => {
  it('should fetch tasks', () => {
    expectSaga(getTasks, fetchTasks)
      .provide([matchers.call.fn(fetchTasks), fakeTasks])
      .put({ type: tasksReceived.type, payload: fakeTasks })
      .dispatch(tasksRequested())
      .run()
  })

  it('should create task', () => {
    expectSaga(addTask, createTask)
      .provide([matchers.call.fn(createTask), fakeTasks[0]])
      .put({ type: taskAdded.type, payload: fakeTasks[0] })
      .dispatch(taskCreationRequested())
      .run()
  })

  it('should fetch subtasks', () => {
    expectSaga(getSubtasks, fetchSubTasks)
      .provide([matchers.call.fn(fetchSubTasks), fakeSubtasks])
      .put({ type: subTasksReceived.type, payload: fakeSubtasks })
      .dispatch(subTasksRequested())
      .run()
  })

  it('should delete subtask', () => {
    expectSaga(removeSubtask, deleteSubtask)
      .provide([matchers.call.fn(deleteSubtask), fakeSubtasks[0]])
      .put({ type: subtaskDeleted.type, payload: fakeSubtasks[0] })
      .dispatch(subtaskDeleteRequested())
      .run()
  })
})
