import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

//export type TaskStateModel = {
//  tasks: TaskModel[];
//  secondsRemaining: number;
//  activeTask: TaskModel | null;
//  currentCycle: number; // 1 a 8
//  config: {
//    workTime: number;
//   shortWorkTime: number;
//   longBreakTime: number;
// };
//};

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: { workTime: 25, shortBreakTime: 5, longBreakTime: 15 },
};

function App() {
  return <Home />;
}

export { App };
