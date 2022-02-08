import { filterTasks } from 'store/tasks/selectors'

const tasks = {
  list: [
    {
      id: 1,
      createTime: 12361231,
      title: 'test 1',
      subTasksList: [
        {
          id: 11,
          taskId: 1,
          createTime: 19961231,
          title: 'test 1',
          labels: ['test', 'subtask', '1'],
        },
      ],
    },
    {
      id: 2,
      createTime: 12363231,
      title: 'test 2',
      subTasksList: [
        {
          id: 22,
          taskId: 2,
          createTime: 12653231,
          title: 'test 2',
          labels: ['test', 'subtask', '2'],
        },
      ],
    },
  ],
}

describe('tasks selectors', () => {
  it('should filter tasks by title', () => {
    const state = {
      tasks: {
        ...tasks,
        searchQuery: 'test 1',
        searchLabels: [],
      },
    }

    expect(filterTasks(state)).toEqual([tasks.list[0]])
  })

  it('should filter tasks by label', () => {
    const state = {
      tasks: {
        ...tasks,
        searchQuery: '',
        searchLabels: ['2'],
      },
    }

    expect(filterTasks(state)).toEqual([tasks.list[1]])
  })
})
