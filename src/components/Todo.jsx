/* eslint-disable react/prop-types */
const Todo = ({ todo, todos, setTodos, notifySuccess }) => {

    const removeTodo = (id) => {
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter(todo => todo.id !== id);
      setTodos(filteredTodos);
      notifySuccess("Remoção realizada com sucesso");
    };
  
    const completeTodo = (id) => {
      const newTodos = [...todos];
      newTodos.map((todo) =>
        todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
      );
      setTodos(newTodos);
      notifySuccess("Operação realizada com sucesso");
    };
  
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
        </div>
      </div>
    );
  }
  
  export default Todo;
  