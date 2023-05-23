
export default function EditBar({ task, handleTasksChange, setIsEdit, tasks }) {

    function handleClick(e) {
        const newTask = e.target.previousSibling.value;
        if (newTask) {
            const newTasks = tasks.map(t => {
                if (t.id === task.id) {
                    return { ...t, text: newTask }
                }
                return t;
            })
            handleTasksChange(newTasks)
            setIsEdit(false);
        }
    }

    return (
        <div className="edit-bar">
            <input type="text" defaultValue={task.text} />
            <button onClick={(e) => handleClick(e)} className="btn btn-save">Save</button>
        </div>
    )
}
