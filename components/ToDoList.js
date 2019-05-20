import React, { Component } from 'react';
import TodoItem from './ToDoItem';

class TodoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
		{todoList}
      </div>
    );
  }
}

export default TodoList;
