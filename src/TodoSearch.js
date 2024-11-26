import './TodoSearch.css'

export function TodoSearch({
  searchValue,
  setSearchValue
}) {


  return (
    <input placeholder='Cortar cebolla' 
      className='TodoSearch'
      value={searchValue}
      onChange = {(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}