import './styles/theme.css';
import './styles/global.css';

import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>
          <>
            Chronos Pomodoro
            <button>
              <TimerIcon />
            </button>
          </>
        </Heading>
      </Container>
    </>
  );
}

export { App };
