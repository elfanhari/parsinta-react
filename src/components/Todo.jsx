import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { IconPencilBolt, IconPencilCancel, IconTrash, IconTrashFilled } from "@tabler/icons-react";

export default function Todo(){
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)

  function handleAddOrUpdateTask(e) {
    e.preventDefault();

    if (editTask) {
      const updatedTask = tasks.map((task) =>
        task.id === editTask ? {
          ...task,
          name: newTask,
        } : task
      );
      setTasks(updatedTask);
      setEditTask(null)
    } else {
      setTasks(prevTask => [
        ...prevTask,
        {
          id: Math.floor(Math.random() * Date.now()),
          name: newTask,
          completed: false
        }
      ]);
    }
    setNewTask('')
  }

  function handleEditTask(task){
    setEditTask(task.id);
    setNewTask(task.name)
  }

  function handleCompleteTask(id){
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    });

    setTasks(updateTask)
  }

  function handleRemoveTask(id){
    const removeTask = tasks.filter(task => task.id !== id);
    setTasks(removeTask)
  }

  return (
    <Card>
      <Card.Title>
        Todo
      </Card.Title>
      <Card.Body>
        <form method="POST" onSubmit={handleAddOrUpdateTask}>
          <div className="flex items-center gap-x-2">
            <Input value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
            <Button type='submit'>
              {editTask ? "Update Task" : "Add Task"}
            </Button>
          </div>
        </form>

      {tasks.length > 0 ? (
        <ol className="mt-4 space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between">
              <span>{task.completed ? '✅' : '❌'}  - {task.name}</span>
              <div className="flex items-center gap-x-2">
                <button type="submit" onClick={() => handleCompleteTask(task.id)} className={`px-2 py-1 border text-xs ${task.completed ? 'text-red-500' : 'text-green-500'}`}>
                  Mark as {task.completed ? 'incomplete' : 'complete'}
                </button>
                <button type="submit" onClick={() => handleEditTask(task)} className="px-2 py-1 border text-xs">
                  <IconPencilBolt className="text-blue-500"></IconPencilBolt>
                </button>
                <button type="submit" onClick={() => handleRemoveTask(task.id)} className="px-2 py-1 border text-xs">
                  <IconTrashFilled className="text-red-500"></IconTrashFilled>
                </button>
              </div>
            </li>
          ))}
        </ol>
      ) : null}
      </Card.Body>
      <Card.Footer>
        You have {tasks.length} tasks.
      </Card.Footer>
    </Card>
  )
}
