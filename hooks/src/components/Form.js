import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error ('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    
}
