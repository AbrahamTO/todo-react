import React from 'react'
import {TodoContent, TodoContentHeader,TodoModalBody, TodoContentBotton, TodoTextArea, TodoBottonCreate} from './TodoCreate.style';
import { TodoContext } from '../../context/TodoContext';


export default function TodoCreate() {
  const {addTask, onCloseModal, onNewTask} = React.useContext(TodoContext);
  return (
    <TodoContent onSubmit={addTask}>
        <TodoContentHeader>
            <h1>Crear tarea</h1>
            <TodoContentBotton onClick={onCloseModal}>❌</TodoContentBotton>
        </TodoContentHeader>
        <TodoModalBody>
        <TodoTextArea onChange={onNewTask} className="inputSearch" type="text" placeholder="Tarea"/>
        <TodoBottonCreate type="submit">
            Crear
        </TodoBottonCreate>
        </TodoModalBody>
    </TodoContent>

  )
}
