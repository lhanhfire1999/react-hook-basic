import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const {onSubmit} = props;
  const [searchValue, setSearchValue] = useState('');
  const typingTmeoutRef = useRef('');



  const handleOnChange = (e) => {
    const valueInput = e.target.value;
    setSearchValue(valueInput);

    if(!onSubmit) return;

    if(typingTmeoutRef.current){
      clearTimeout(typingTmeoutRef.current);
    }

    typingTmeoutRef.current = setTimeout(()=>{
      const formValues = {
        searchTerm : valueInput
      }
      onSubmit(formValues);
    }, 300)

  }
  return (
    <form className='post-filter-form'>
      <input
        type="text"
        value={searchValue}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default PostFilterForm;