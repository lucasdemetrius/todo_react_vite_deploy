import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const TodoForm = ({ todos, setTodos, notifySuccess }) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }];
    setTodos(newTodos);
    notifySuccess("Cadastro realizado com sucesso");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || !category) return;

    addTodo(value, category);

    setValue("");
    setCategory("");
  }

  return (
    <div className='todo-form'>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label htmlFor="todoTitle">Tarefa:</label>
          <input
            type="text"
            placeholder="Digite o título"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control rounded shadow-sm border-1"
            required 
          />
        </div>

        <div className="mt-2 mb-3">
          <label htmlFor="todoCategory">Categoria:</label>
          <select value={category} className="form-select rounded shadow-sm border-1" required onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary me-2">Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
