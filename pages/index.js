import React, { Component } from 'react';
import css from '../styles/style.scss';
import ToDoTemplate from '../components/ToDoTemplate';
import Form from '../components/Form';
import ToDoList from '../components/ToDoList';
import axios from "axios";

// DELETE http://localhost:3000/api/todos//
// json-server에 붙히기//
// import시 선언 동일하게//
// component 폴더 나누기//
// 폴더 구조 변경//
// class화
// 에디터 변경 //
// es6 공부

class Index extends Component {

  static async getInitialProps ({req}) {
    const response = await axios.get('http://localhost:3000/todos/');
    return {
      data : response.data
    }
  }

  id = 2

  state = {
    input: '',
//    todos: [
//      { id: 0, text: 'Sample To Do List1', checked: true },
//      { id: 1, text: 'Sample To Do List2', checked: true }
//    ]
	todos: this.props.data
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }

  handleCreate = () => {

    // axios.post 
    const { input, todos } = this.state;
    this.setState({
      input: '', 
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

   return (
      <ToDoTemplate form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
		<ToDoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </ToDoTemplate>
    );
  }
}

export default Index
