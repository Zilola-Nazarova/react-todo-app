import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  return <li>{itemProp.title}</li>;
};

TodoItem.propTypes = {
  itemProp: PropTypes.object,
};

export default TodoItem;
