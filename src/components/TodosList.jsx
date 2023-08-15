import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => { 
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          delTodo={delTodo}
          handleChange={handleChange}
          key={todo.id}
          itemProp={todo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
}

export default TodosList;
