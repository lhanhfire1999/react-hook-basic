import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import postList from './services/postApi';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchPostList = async() => {
      try{
        const params = {
          _limit: 10,
          _page: 1,
        };
        const results = await postList.getPost(params);
        setData(results.data);
      }
      catch(error){
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    fetchPostList();
  }, [])

  const handleTodoClick = (todo) => {
  // const newTodoList = [...todoList].filter(item => item.id !== todo.id);
  const index = todoList.findIndex(item => item.id === todo.id);
  if(index < 0) return;

  const newTodoList = [...todoList];
  newTodoList.splice(index, 1);
  setTodoList(newTodoList);
  }

  const handleOnSubmit = (formValue) => {
    // formValue['id'] = todoList.length + 1;
    const newForm = {
      id: todoList.length + 1,
      ...formValue
    }
    console.log(newForm);
    setTodoList([...todoList, newForm]);
  }

  return (
    <div className="app">
      <h1>Welcome react hooks</h1>
      {/* <ColorBox/>
      <TodoList
        todos={todoList}
        handleTodoClick={handleTodoClick}
      />
      <TodoForm onSubmit={handleOnSubmit}/> */}
      <PostList posts={data}/>
      
    </div>
  );
}

export default App;
