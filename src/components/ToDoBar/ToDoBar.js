import React, { useState } from 'react';
import Button from '../UI/Button';
import styled from 'styled-components';

export default function ToDoBar() {
  const [todo, setTodo] = useState('');
  const handleSubmitTodo = () => {
    console.log('adding Todo', todo);
  };

  return (
    <TodoDiv>
      <div>
        <Label>Add Todo</Label>
        <Input onChange={(e) => setTodo(e.target.value)} />
      </div>
      <Button callback={handleSubmitTodo}>Add Todo</Button>
    </TodoDiv>
  );
}

const Label = styled.label`
  font-size: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  height: 30px;
`;

const TodoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
