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
        setTodos([...todos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo) => (
                        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;