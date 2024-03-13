import React, { createContext } from "react";
import useStorage from "../hooks/useStorage";

// const allTask = [
//     {title: "DASDASD", completed: false},
//     {title: "DAAAAAA", completed: false},
//     {title: "DEEEEE", completed: true},
//     {title: "Comprar", completed: false},
//   ]

const TodoContext = createContext();

const TodoProvider = ({children}) =>{
    const {data:task,isLoading,isError,saveData:setTask}= useStorage("tasks",[]);
    const[showModal, setShowModal]=React.useState(false);
    const [newTaskInput, setNewTaskInput]=React.useState("");
    const [search,  setSearch] = React.useState("");
    const taskCount = task.length;
    const completedTask =  task.filter((task) => task.completed).length;
  
    const onComplete=(item) =>{
      const newTask = task.map(t =>{
        if(t.title === item.title){
          return{
            ...t,
            completed:!t.completed
  
          }
        }
        return t;
      })
      setTask(newTask);
    }
    const onDelete=(item) =>{
      const newTask = task.filter(t => t.title !== item.title);
        setTask(newTask);
  
    }
   
    const onSearch = (e)=>{
      setSearch(e.target.value);
    }
  
    const onShowModal=()=>{
      setShowModal(true)
    }
    const onCloseModal=()=>{
      setShowModal(false)
    }
  
    const addTask=(e)=>{
      e.preventDefault();
      const newTask =[...task, {title: newTaskInput, completed:false}];
      setTask(newTask);
      setNewTaskInput("");
      setShowModal(false);
  
    }
    const onNewTask=(e)=>{
      setNewTaskInput(e.target.value);
    }
    return(
        <TodoContext.Provider value={{
            showModal,
            task,
            search,
            taskCount,
            completedTask,
            isLoading,
            isError,
            onComplete,
            onDelete,
            onSearch,
            onShowModal,
            onCloseModal,
            addTask,
            onNewTask,
        }}>
            {children}
        </TodoContext.Provider>

    )
}
export {TodoProvider, TodoContext};