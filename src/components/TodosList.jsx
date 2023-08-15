import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({todosProps}) => { 
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
}

export default TodosList;
