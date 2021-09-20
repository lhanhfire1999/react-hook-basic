import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

   const handleTodoClick = (todo) => {
    // const newTodoList = [...todoList].filter(item => item.id !== todo.id);

    const index = todoList.findIndex(item => item.id === todo.id);
    if(index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
   }

  return (
    <div className="app">
      <h1>Welcome react hooks</h1>
      <ColorBox/>
      <TodoList
        todos={todoList}
        handleTodoClick={handleTodoClick}
      />
    </div>
  );
}

export default App;
