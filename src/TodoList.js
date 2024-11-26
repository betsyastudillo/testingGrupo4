import './TodoList.css'

export function TodoList(props) {
  return (
    <div className='TodoList'>
      <ul>
        <div>
          {props.children}
        </div>
      </ul>
    </div>
  )
}