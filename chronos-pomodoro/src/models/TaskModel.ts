import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // when time task was completed
  interruptedDate: number | null; // when time task was interrupted
  type: keyof TaskStateModel["config"];
};
