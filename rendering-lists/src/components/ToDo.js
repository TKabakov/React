import { useState } from 'react';

const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
)

function ToDoList (){
    const [todos, setTodos] = useState([
        {
        id: 'todo1',
        createdAt: '18:00',
      },
    
        {
          id: 'todo2',
          createdAt: '20:00'
        }
    ]);

    const reverseOrder = () => {
        setTodos([...todos].reberse());
    }
}