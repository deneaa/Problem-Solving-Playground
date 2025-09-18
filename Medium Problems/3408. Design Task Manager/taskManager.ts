type Task = {
  userId: number;
  priority: number;
};

class TaskManager {
  taskMap: Map<number, Task> = new Map();

  constructor(tasks: number[][]) {
    tasks.forEach(([userId, taskId, priority]) => {
      this.taskMap.set(taskId, { userId, priority });
    });
  }

  add(userId: number, taskId: number, priority: number): void {
    this.taskMap.set(taskId, { userId, priority });
  }

  edit(taskId: number, newPriority: number): void {
    const task = this.taskMap.get(taskId);
    if (task) {
      task.priority = newPriority;
      this.taskMap.set(taskId, task);
    }
  }

  rmv(taskId: number): void {
    this.taskMap.delete(taskId);
  }

  execTop(): number {
    let topPriority = -Infinity;
    let topTaskId = -Infinity;
    let topUserId = -1;

    this.taskMap.forEach((task, taskId) => {
      if (
        task.priority > topPriority ||
        (task.priority === topPriority && taskId > topTaskId)
      ) {
        topPriority = task.priority;
        topTaskId = taskId;
        topUserId = task.userId;
      }
    });

    if (topTaskId !== -Infinity) {
      this.taskMap.delete(topTaskId);
    }

    return topUserId;
  }
}
