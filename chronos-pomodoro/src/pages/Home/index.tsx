import { useContext } from 'react';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { TaskContext } from '../../contexts/TaskContext/TaskContext';

export function Home() {
  const taskContext = useContext(TaskContext);
  console.log(taskContext);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
