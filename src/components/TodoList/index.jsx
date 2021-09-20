import PropTypes from 'prop-types';
import React from 'react';

TodoList.propTypes = {
  todos: PropTypes.array,
  handleTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  handleTodoClick: null
}

function TodoList(props) {
  const {todos, handleTodoClick} = props;

  const handleClick = (todo) => {
    if(handleTodoClick){
      handleTodoClick(todo);
    }
  }
  return (
    <ul className='todolist'>
      {todos.map((item, i) => (
        <li 
          key={item.id}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;