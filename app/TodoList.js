import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, toggleComplete, deleteTodo, type}) => {
  const getVisibleTodos = (_todos, _type) => {
    switch (_type) {
      case 'All':
        return _todos;
      case 'Complete':
        return _todos.filter(t => t.complete);
      case 'Active':
        return _todos.filter(t => !t.complete);
    }
  };
  todos = getVisibleTodos(todos, type)?.map((todo, i) => {
    return (
      <Todo
        key={todo.todoIndex}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );
  });
  return <View>{todos}</View>;
};

export default TodoList;
