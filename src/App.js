import { useState } from "react";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const newTask = {
      id: Math.random().toString(10).substring(7),
      title: taskTitle,
    };

    if (taskTitle) {
      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
      setTasks(tasksCopy);
      setTaskTitle("");
    }
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className="app">
      <div className="form">
        <input
          type="text"
          placeholder="Digite a tarefa..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="button" onClick={addTask}>
          Salvar
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <p className="task-title">{task.title}</p>
            <button type="button" onClick={() => deleteTask(task.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
