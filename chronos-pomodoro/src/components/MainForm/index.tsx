import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';
import { useRef, useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(state.currentCycle);

  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      alert('Por favor, preencha o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleInteruptTask = () => {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (task.id === prevState.activeTask?.id) {
            return {
              ...task,
              interruptedDate: Date.now(),
            };
          }
          return task;
        }),
      };
    });
  };

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id='task'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}
      <div className={styles.formRow}>
        {!state.activeTask ? (
          <Button
            type='submit'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            icon={<PlayCircleIcon />}
            key='start-task-button'
          />
        ) : (
          <Button
            type='button'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInteruptTask}
            key='stop-task-button'
          />
        )}
      </div>
    </form>
  );
}
