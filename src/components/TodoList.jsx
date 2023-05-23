import Task from './Task'


export default function TodoList({ tasks, handleTasksChange }) {

    const list = tasks.map(task => (
        <Task key={task.id} task={task} handleTasksChange={handleTasksChange} tasks={tasks} />
    ))
    return (
        <div className='todo-list'>
            {list}
        </div>
    )
}
