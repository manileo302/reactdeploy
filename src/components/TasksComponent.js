import TaskComponent from "./TaskComponent"

const TasksComponent = ({tasks,onDelete,onToggle}) => {
    
    
    return (
        <>
        {
            tasks.map((task)=> (
                <TaskComponent key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>            ))
        }
        </>
 
    )
}

export default TasksComponent
