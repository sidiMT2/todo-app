export default function InputBar({ tasks, handleTasksChange, text }) {

    function handleClick(e) {
        const newTask = e.target.previousSibling.value;
        if (newTask) {
            const newTasks = [...tasks, { id: tasks.length + 1, text: newTask, completed: false }]
            handleTasksChange(newTasks)
        }

    }

    return (
        <div className="input-bar">
            <input type="text" placeholder="Enter a task" defaultValue={text} />
            <button className="btn btn-add" onClick={(e) => handleClick(e)}>Add</button>
        </div>
    )
}
