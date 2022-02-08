export const filterTasks = ({ tasks }) => {
  let filtered = tasks.list

  if (tasks.searchQuery) {
    filtered = filtered.filter(
      task =>
        task.title.toLowerCase().includes(tasks.searchQuery) ||
        (task.subTasksList &&
          task.subTasksList.some(subtask =>
            subtask.title.toLowerCase().includes(tasks.searchQuery),
          )),
    )
  }

  if (tasks.searchLabels.length) {
    filtered = filtered.filter(
      task =>
        task.subTasksList &&
        task.subTasksList.some(subtask =>
          tasks.searchLabels.some(label => subtask.labels.includes(label)),
        ),
    )
  }

  return filtered
}
