import { useEffect, useState } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';

type TaskProviderProps = {
  children: React.ReactNode;
};

export function TaskProvider({ children }: TaskProviderProps) {
  const [state, setState] = useState(initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
