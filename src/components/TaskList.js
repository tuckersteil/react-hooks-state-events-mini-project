import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
        key={task.text + task.category}
        category={task.category}
        text ={task.text}
        onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

// {tasks.map((task, index) => (
//   <Task test={index} text={task.text} category={task.category}/>
// ))}

//{listedTasks}

// {tasks.map((task) => (
//   <Task onDelete={setTasks} text={task.text} category={task.category}/>
// ))}