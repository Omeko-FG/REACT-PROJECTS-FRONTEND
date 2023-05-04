import React from 'react';

interface IlistItem {
  item:TodoType;
} 

const TodoListItem:React.FC<IlistItem> = ({item}) => {
  return (
    <li>
      {item.isDone ? <p className='checked'>{item.task}</p> :
      <p> {item.task} </p>}
      <span className="task-icons" >✖️</span>
    </li>
  );
};

export default TodoListItem