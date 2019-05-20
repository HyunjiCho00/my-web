import React, { Component } from 'react';
import css from '../styles/style.scss';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    console.log(id);

    return (
      <div className={css['todoitem']} onClick={() => onToggle(id)}>
        {
          checked && (<div className={css['check-mark']}>✓</div>)
        }
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        
        <div className={css.right}>
          <div className={css.remove} onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            onRemove(id)}
          }>&times;</div>
        </div>
        
      </div>
    );
  }
}

export default TodoItem;
