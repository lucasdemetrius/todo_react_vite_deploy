// eslint-disable-next-line react/prop-types, no-unused-vars
const Filter = ({ setSort }) => {
  return (
    <div>
      <button onClick={() => setSort("Asc")}>asc</button>
      <button onClick={() => setSort("Desc")}>desc</button>
    </div>
  )
}

export default Filter
