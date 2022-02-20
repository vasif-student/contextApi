import React from 'react';
import TodoList from './components/Todo/TodoList';
import Context from '../src/components/context'

const styles = {
  h1: {
    textDecoration: 'underline',
    fontStyle: 'italic',
    color: 'blue'
  }
}

function App() {
  const [todos,setTodos] = React.useState([
      { id: 1, completed: false, title: 'Do homework'},
      { id: 2, completed: false, title: 'Visit friend'},
      { id: 3, completed: false, title: 'Feed my cat'}
    ])
  

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
          <h1 style={styles.h1}>Things to do:</h1>

          <TodoList todos={todos} onToggle={toggleTodo}/>
      </div>
    </Context.Provider>
  )
}

export default App;
