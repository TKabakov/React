import { useReducer } from 'react';
import AddTask from './ToDoList/AddTask';
import TaskList from './ToDoList/TaskList';

export default function TaskAppState() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  function taskReducer (tasks, action){
    switch (action.type){
       case 'added':{
            return [
                ...tasks,
                {
                  id: action.id,
                  text: action.text,
                  done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                  return action.task;
                } else {
                  return t;
                }
              }) ;
        }
        case 'deleted' : {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
  }

  function handleAddTask(text) {
    dispatch({
        type: 'added',
        id: nextId++,
        text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
        type: 'changed',
        task: task,
    });   
  }

  function handleDeleteTask(taskId) {
    dispatch({
        tpe: 'deleted',
        id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
