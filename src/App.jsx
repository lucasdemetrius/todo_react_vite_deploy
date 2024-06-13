import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

import Todo from "./components/Todo";
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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <div className="app">
      <div className="head-app">
        <div>
          <h4>Lista de tarefas</h4>
        </div>
        <div>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" onClick={openModal} />
        </div>
      </div>

      <Search search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} setSort={setSort} />

      <h6>Tarefas</h6>
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              todos={todos} 
              setTodos={setTodos} 
              notifySuccess={notifySuccess} 
            />
          ))}
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
