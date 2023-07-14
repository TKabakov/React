import { useReducer  } from 'react';

function reducer (tasks, action){
  switch( action.type) {
    case 'added': {
      return[...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if(t.id === action.tasks.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
     case 'deleted': {
       return tasks.filter(t => t.id !== action.id);
     }
     
     default: {
       throw Error('Unknown action: ' + action.type);
     }
    }
 }

 export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    );

    function handleAddTask (text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch ({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    
 }
