import logo from './logo.svg';
import './App.css';
import AddInput from './components/AddInput';
import Todo from './components/Todo';
import Title from './components/Title';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';




function App() {

  const todos = useSelector(state => state.todo);

  return (
    <div className="container-fluid">
          <div className='row' style={{maxWidth:"300px",margin:"auto"}}>
            <Title/>
            <AddInput/>
          </div>
          {todos&&todos.map((item) => (
            <Todo
              key={item.id}
              name={item.title}
              done={item.done}
              id={item.id}
              favourite={item.favourite}
            />
          ))}
    </div>
  );
}

export default App;
