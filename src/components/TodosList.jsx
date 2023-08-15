import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({ todosProps, handleChange, delTodo }) => { 
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          delTodo={delTodo}
          handleChange={handleChange}
          key={todo.id}
          itemProp={todo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
}

export default TodosList;
