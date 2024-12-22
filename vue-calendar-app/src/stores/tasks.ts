import { defineStore } from 'pinia'

export class Task {
  name: string
  time: any
  description: string
}

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    // stores tasks
    tasksByDate: new Map<Date, Array<Task>>()
  }),
  getters: {
    // Get tasks for a specific date
    getTasksForDate: (state) => (date: Date) => {
      // Convert date to a string key supported by Map
      const dateKey = date.toDateString()
      // Return tasks or an empty array if none exist
      return state.tasksByDate[dateKey] || []
    }
  },
  actions: {
    addTask(date: Date, task: Task) {
      const dateKey = date.toDateString()
      if (!this.tasksByDate[dateKey]) {
        this.tasksByDate[dateKey] = [] // Initialize an array if no tasks exit for the date
      }
      this.tasksByDate[dateKey].push(task) // Add the new task to the date's task list
    }
  }
})


