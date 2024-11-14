import { useEffect, useState } from "react";

import {Task} from "../utils/task";

const Tasks = () => {

  const [tasks, setTaks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const resp = await fetch('http://localhost:3008/api/tasks/');
      const data: Task[] = await resp.json();
      setTaks(data);
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <p>Here are some tasks:</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text} is {task.completed ? "completed." : "not completed."}</li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks