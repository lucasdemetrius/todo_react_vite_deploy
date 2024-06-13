// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div>

      <div className="row">
        <div className="col-sm-8">
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar"
              className="form-control rounded shadow-sm border-2 mt-0"
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="search">
            <select value={filter} className="form-select rounded shadow-sm border-2" onChange={(e) => setFilter(e.target.value)}>
              <option value="All">Todas</option>
              <option value="Completed">Completas</option>
              <option value="Incomplete">Incompletas</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search
