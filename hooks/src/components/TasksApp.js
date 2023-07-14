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
