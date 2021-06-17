import "./styles.css";
import React from "react";
export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} length={todos.length} />
    </div>
  );
}

function TodoList(props) {
  console.log(props);
  var todos = props.todos;
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}

function AddTodo({ setTodos, length }) {
  const inputRef = React.useRef();
  function handleAddTodo(event) {
    // To prevent form default behaviour i.e page refresh on submit form
    event.preventDefault();

    // elements has form fields
    console.log(event.target.elements);

    // this contains the actual value by using the name given to the field
    console.log(event.target.elements.addTodo.value);
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: ++length,
      text,
      done: false
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(todo);
    });
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
