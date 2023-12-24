import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid, setIsValid] = useState(false)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0){
      setIsValid(false)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(true)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: isvalid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{backgroundColor: isvalid ? 'salmon' : 'transparent', borderColor: isvalid ? 'red' : '#ccc' }} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
