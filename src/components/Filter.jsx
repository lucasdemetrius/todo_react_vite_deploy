// eslint-disable-next-line react/prop-types, no-unused-vars
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h6>Filtrar/Ordenar</h6>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordenação</p>
          <button onClick={() => setSort("Asc")}>Crescente</button>
          <button onClick={() => setSort("Desc")}>Decrecente</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
