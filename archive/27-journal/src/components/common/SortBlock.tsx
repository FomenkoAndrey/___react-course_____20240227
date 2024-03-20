import { useNavigate } from 'react-router-dom'

const SortBlock = () => {
  const navigate = useNavigate()

  const setSortKeyHandler = (key?: string) => {
    navigate(`.${key ? `?sort=${key}` : ''}`)
  }

  return (
    <div className="sort-block">
      <h2>Sort articles by:</h2>
      <button onClick={() => setSortKeyHandler('title')}>Title, Asc</button>
      <button onClick={() => setSortKeyHandler('-title')}>Title, Desc</button>
      <button onClick={() => setSortKeyHandler('id')}>Id, Asc</button>
      <button onClick={() => setSortKeyHandler('-id')}>Id, Desc</button>
      <button onClick={() => setSortKeyHandler()}>Reset sorting</button>
    </div>
  )
}

export default SortBlock
