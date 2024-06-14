import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [todos, setTodos] = useState([]);

  function notifySuccess(msg) {
    toast.success(msg);
  }

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  const filteredTodos = todos
    .filter((todo) =>
      filter === 'All'
        ? true
        : filter === 'Completed'
          ? todo.isCompleted
          : !todo.isCompleted
    )
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === 'Asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
    );

  const totalTodos = todos.length;

  return (
    <div className="app">
      <div className="head-app">
        <div>
          <h4>Lista de tarefas</h4>
        </div>        
      </div>

      <Search
        className="mt-3"
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        setSort={setSort}
      />
      <h6 className="mt-2">Tarefas ({totalTodos})</h6>
      <div className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              notifySuccess={notifySuccess}
            />
          ))
        ) : (
          <span className="no-tasks-message">Nenhuma tarefa encontrada</span>
        )}
      </div>

      <div className="head-app">
        <div>
          
        </div>
        <div>
          <Fab color="primary" onClick={openModal}>
            <AddIcon />
          </Fab>
        </div>
      </div>



      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm todos={todos} setTodos={setTodos} notifySuccess={notifySuccess} />
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
}

export default App;
