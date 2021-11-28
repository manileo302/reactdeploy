import HeaderComponent from "./components/HeaderComponent";
import TasksComponent from "./components/TasksComponent";
import { useState } from "react"
import AddTaskComponent from "./components/AddTaskComponent";

const App=()=> {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] =useState([
    {
    id:1,
    text:'Doctors Appointment',
    day:'Feb 6th at 2.30pm',
    reminder:true,
},
{
    id:2,
    text:'Food Shopping',
    day:'Feb 5th at 2.30pm',
    reminder:true,
},
{
    id:3,
    text:'Meeting at School',
    day:'Feb 5th at 2.30pm',
    reminder:true,

},
])
//Add Task
const addTask =(task)=>{
  const id = Math.floor(Math.random() * 1000 )+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

//Delete the task
const deleteTask = (id)=>{
  setTasks(tasks.filter((tasks)=>tasks.id !== id))
  };
//Toggle remainder
const toggeRemainder = (id) => {
  setTasks(tasks.map((task)=>(task.id === id ? {...task,reminder:!task.reminder}:task)))
}

  return (
    <div className="container">
     <HeaderComponent onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    { showAddTask && <AddTaskComponent onAdd={addTask} />}
     {tasks.length > 0 ?
     <TasksComponent tasks={tasks} onDelete={deleteTask}  onToggle={toggeRemainder}/>:'No Tasks To Shows '}
    </div>
  );
}

export default App;
