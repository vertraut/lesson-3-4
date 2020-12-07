// import Counter from './components/Counter';
// import Counter from './components/Dropdown';
import { Component } from 'react';
import './App.css';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import ToDoList from './components/ToDoList';
import initialToDos from './components/ToDoList/todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialToDos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodosCount = todos.reduce(
      (acc, { completed }) => (completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Всего задач: {todos.length}</p>
          <p>Выполенего: {completedTodosCount}</p>
        </div>
        <ToDoList todos={todos} deleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
