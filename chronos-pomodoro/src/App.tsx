import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskProvider } from './contexts/TaskContext/TaskProvider';

function App() {
  return (
    <TaskProvider>
      <Home />;
    </TaskProvider>
  );
}

export { App };
