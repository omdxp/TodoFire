import {connect} from 'react-redux';
import TodoList from './todo-list';
import {toggleTodoAction} from '../../redux/actions';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodoAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
