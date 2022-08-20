import { useState } from "react";
import API from './Services/Service'
import TopBar from './Components/Navbar/TopBar'
import AddButton from "./Components/Content/AddButton";
import { taskListType } from "./App.type";
import TodoList from "./Components/TodoList/TodoList";



function App() {
  const [taskList, setAllTasks] = useState<taskListType>([]);
  const [loading,setLoading] = useState<boolean>(true)

  useState(()=>{
    API.get('/tasks').then((res:any)=>{
      setAllTasks([...res.data]);  
      setLoading(false)    
    })
  })
  
  return (
    <div>
      <TopBar/>
    <AddButton setAllTasks={setAllTasks} taskList={taskList} />
    <br />
    <TodoList setAllTasks={setAllTasks} taskList={taskList} loading={loading} />
    </div>
  );
}

export default App;
