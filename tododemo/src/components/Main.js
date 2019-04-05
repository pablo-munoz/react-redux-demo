import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from "../store";
import { addTodo, removeTodo } from "../actions/todoActions";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      todo: ""
    }
  }

  render() {
    const todos = [];
    return (
      <div>
        <p>Todo List</p>
        { this.props.todos.map((todo, index) =>
            <div>
              <p key={ index } style={{ display: "inline-block" }}>{ todo }</p>
              <button onClick={this.removeTodo.bind(null, index)}>X</button>
            </div>
          )
        }

        <input value={ this.state.todo }
               onChange={ this.onChange } />
        <button onClick={ this.addTodo }>
          Add todo
        </button>
      </div>
    );
  }

  onChange = event => {
    this.setState({ todo: event.target.value });
  }

  addTodo = () => {
    const todoContent = this.state.todo;

    this.setState({
      todo: ""
    }, () => {
      store.dispatch(
        addTodo(todoContent)
      );
    })
  }

  removeTodo = (index) => {
    store.dispatch(
      removeTodo(index)
    )
  }
}

const mapStateToProps = (store) => {
  return {
    todos: store.todos
  }
}

export default connect(mapStateToProps)(Main);
