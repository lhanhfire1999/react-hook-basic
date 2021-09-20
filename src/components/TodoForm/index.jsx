import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null, 
}

function TodoForm(props) {
  const {onSubmit} = props;
  const [value, setValue] = useState('');

  const handleSubmitClick = (e) => {
    // Prevent reloading browser
    e.preventDefault();

    if(!onSubmit) return;
    const formValue = {
      title: value
    }
    onSubmit(formValue);
    setValue('');
  }

  const handleOnChange = (e) => {
    const valueInput = e.target.value;
    setValue(valueInput)
  }
  return (
    <form onSubmit={handleOnChange}>
      <input 
        type='text'
        value={value}
        onChange={handleOnChange} 
      />
      <button
        type='submit'
        onClick={handleSubmitClick}
      >
        Submit
      </button>
    </form>
  );
}

export default TodoForm;