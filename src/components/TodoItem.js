import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`TodoItem-icon ${props.completed ? 'TodoItem-icon--check' : ''}`}>V</span>
      <p className={`TodoItem-text ${props.completed ? 'TodoItem-text--completed' : ''}`}>{props.text}</p>
      <span className="TodoItem-icon TodoItem-icon--delete">X</span>
    </li>
  );
}

export { TodoItem }