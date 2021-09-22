import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import postList from './services/postApi';

function App() {
  // Lap 4, 5 TodoList and TodoForm
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

  const handleOnSubmit = (formValue) => {
    // formValue['id'] = todoList.length + 1;
    const newForm = {
      id: todoList.length + 1,
      ...formValue
    }
    setTodoList([...todoList, newForm]);
  }

  // Lap 7: Call Api
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  })
  useEffect(()=>{
    const fetchPostList = async() => {
      try{
        const results = await postList.getPost(filter);
        console.log(results);
        setData(results.data);
        setPagination(results.pagination);

      }
      catch(error){
        console.log('Failed to fetch post list: ', error.message);
      }
    }
    fetchPostList();
  }, [filter])

  // Lap 8: Pagination 
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });

  const handlePageChange = (newPage) => {
    const newPagination = {...filter, _page: newPage};
    setFilter(newPagination);
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
      <PostList 
        posts={data}
      />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default App;
