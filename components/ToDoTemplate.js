import React from 'react';
import css from '../styles/style.scss';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className={css.template}>
      <div className={css.title}>
        To Do List
      </div>
      <section className={css['form-wrapper']}>
        {form}
      </section>
      <section className={css['todo-wrapper']}>
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;