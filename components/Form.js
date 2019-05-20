import React from 'react';
import css from '../styles/style.scss';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className={css.form}>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className={css.createbutton} onClick={onCreate}>
        Add
      </div>
    </div>
  );
};

export default Form;