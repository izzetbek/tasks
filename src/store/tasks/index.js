import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'tasks',
  initialState: {
    searchQuery: '',
    searchLabels: [],
    currentTask: null,
    currentSubtask: null,
    list: [],
    loading: false,
    lastFetch: null,
    error: '',
  },
  reducers: {
    requestStarted: tasks => {
      tasks.loading = true
    },
    requestEnded: tasks => {
      tasks.loading = false
    },
    requestFailed: (tasks, action) => {
      tasks.error = action.payload
    },
    searchQueryChanged: (tasks, action) => {
      tasks.searchQuery = action.payload.toLowerCase()
    },
    searchLabelAdd: (tasks, action) => {
      tasks.searchLabels.push(action.payload)
    },
    searchLabelDelete: (tasks, action) => {
      tasks.searchLabels = tasks.searchLabels.filter(label => label !== action.payload)
    },
    tasksRequested: () => {},
    tasksReceived: (tasks, action) => {
      tasks.list = action.payload
      tasks.lastFetch = Date.now()
    },
    taskCreationRequested: tasks => {
      tasks.loading = true
    },
    taskAdded: (tasks, action) => {
      tasks.loading = false
      tasks.list.push(action.payload)
    },
    subTasksRequested: (tasks, action) => {
      tasks.loading = true
      tasks.currentTask = action.payload
    },
    subTasksReceived: (tasks, action) => {
      tasks.loading = false
      if (action.payload.length) {
        const idx = tasks.list.findIndex(task => task.id === action.payload[0].taskId)

        tasks.list[idx].subTasksList = action.payload
      }
    },
    subtaskDeleteRequested: (tasks, action) => {
      tasks.loading = true
      tasks.currentSubtask = action.payload
    },
    subtaskDeleted: (tasks, action) => {
      tasks.loading = false
      const idx = tasks.list.findIndex(task => task.id === action.payload.taskId)

      tasks.list[idx].subTasksList = tasks.list[idx].subTasksList.filter(
        subtask => subtask.id !== action.payload.id,
      )
      if (!tasks.list[idx].subTasksList.length) {
        tasks.list = tasks.list.filter(task => task.id !== action.payload.taskId)
      }
    },
  },
})

export const {
  tasksRequested,
  requestFailed,
  tasksReceived,
  taskCreationRequested,
  taskAdded,
  subTasksRequested,
  subTasksReceived,
  subtaskDeleteRequested,
  subtaskDeleted,
  searchQueryChanged,
  searchLabelAdd,
  searchLabelDelete,
  requestStarted,
  requestEnded,
} = slice.actions

export default slice.reducer
