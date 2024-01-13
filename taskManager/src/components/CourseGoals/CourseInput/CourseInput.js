import React, { useState } from 'react';
import styled from 'styled-components'

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.isValid ? 'inherit' : 'red')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.isValid ? '#ccc' : 'red')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background: ${props => (props.isValid ? 'inherit' : '#ffd7d7')};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={isValid}>
        <label className={!isValid && 'invalid'}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
