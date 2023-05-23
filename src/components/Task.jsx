import { useState } from "react";

import EditBar from "./EditBar";

export default function Task({ task, handleTasksChange, tasks }) {

    const [isEdit, setIsEdit] = useState(false)

    function handleDelete(e) {
        const newTasks = tasks.filter(t => t.id !== task.id)
        handleTasksChange(newTasks);
    }
    function handleEdit(e) {
        setIsEdit(true);
    }

    function handleCheckboxChange(e) {
        const newTask = { ...task, completed: !task.completed }
        const newTasks = tasks.map(t => {
            if (t.id === task.id) {
                return newTask
            }
            return t;
        })

        if (newTask.completed) {
            e.target.parentElement.parentElement.classList.add('completed');
        } else {
            e.target.parentElement.parentElement.classList.remove('completed');
        }
        handleTasksChange(newTasks)
    }
    const completed = task.completed ? ' completed' : '';
    return (
        !isEdit ?
            <div className={'task' + completed}>
                <div className="task-checkbox">
                    <input type="checkbox" checked={task.completed} onChange={(e) => handleCheckboxChange(e)} />
                </div>

                <div className="task-text">
                    {task.text}
                </div>
                <div className="task-actions">
                    <button onClick={(e) => handleEdit(e)} className="btn btn-edit">Edit</button>
                    <button onClick={(e) => handleDelete(e)} className="btn btn-delete" >Delete</button>
                </div>
            </div>
            :
            <EditBar task={task} handleTasksChange={handleTasksChange} tasks={tasks} setIsEdit={setIsEdit} />
    )
}
