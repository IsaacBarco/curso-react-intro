import '../styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`TodoItem-icon ${props.
        completed && 'TodoItem-icon--check'}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p
        className={`TodoItem-text ${props.
        completed && 'TodoItem-text--completed'}`}
      >
        {props.text}
      </p>
      <span
        className="TodoItem-icon TodoItem-icon--delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem }
