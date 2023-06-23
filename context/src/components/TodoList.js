import { useMemo } from 'react';
import { filterTodos} from './utils';

export default function TodoList({ todos, theme, tab}) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [ todos, tab]
    );

    return(
        <div className={theme}>
            
        </div>
    )
}