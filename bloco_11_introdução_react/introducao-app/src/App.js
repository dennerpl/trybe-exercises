import ReactDOM from 'react-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};
const taskList = ['Fazer exercícios', 'Meditar', 'Ler', 'Aprender react'];
const ListDom = taskList.map((item) =>{
  return task(item);
})
ReactDOM.render(ListDom, document.getElementById('taskListTest'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul id='taskListTest'>
          {task('Testando')}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


  

export default App;
