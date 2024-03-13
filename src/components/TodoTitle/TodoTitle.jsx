import React from 'react'
import { TodoContext } from '../../context/TodoContext'
import {Todotitle, TodoButtonAdd} from './TodoTitle.style'

export default function TodoTitle() {
  const {isLoading,completedTask, taskCount, onShowModal}=React.useContext(TodoContext);
  return (
    <div>
      <Todotitle>
        {isLoading ? "Loading...": `Tarea  ${completedTask} de ${taskCount}`}
        </Todotitle>
      <TodoButtonAdd disabled={isLoading} onClick={onShowModal}>+</TodoButtonAdd>
    </div>
  )
}

