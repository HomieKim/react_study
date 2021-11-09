import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
    </TodoTemplate>
  )
};

export default App;
