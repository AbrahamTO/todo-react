import React from "react";
import TodoTitle  from "./components/TodoTitle/TodoTitle";
import TodoCardList   from "./components/TodoCardList/TodoCardList";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoCard from "./components/TodoCard/TodoCard";
import TodoModal from "./components/TodoModal/TodoModal";
import {Appcontainer} from './app.style';
import TodoCreate from  './components/TodoCreate/TodoCreate';
import {TodoContext} from './context/TodoContext';


function App() {

  const {task, onComplete, onDelete, search, showModal, isLoading}=React.useContext(TodoContext);

  return (
    <Appcontainer>
      <TodoTitle/>
      <TodoSearch />
      <TodoCardList >
        {isLoading && <div>Loading...</div>}
        {task
        .filter(t=>t.title.toLowerCase().includes(search.toLowerCase()))
        .map((item, index)=>(
          <TodoCard key={index} 
                    item={item} 
                    onComplete={onComplete} 
                    onDelete={onDelete} />)
        )};
      </TodoCardList>
      {showModal && (
        <TodoModal>
          <TodoCreate/>
        </TodoModal>
      )}
      
    </Appcontainer>
  );
}

export default App;
