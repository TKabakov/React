import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1
            };
        }
    }
}