import React from 'react';
import useInputForm from 'hooks/useInputForm';
import classes from 'components/UsernameFormPrompt.module.css';
import { form, container } from 'shared/styles.module.css';

export default function UsernameFormPrompt(props) {
  const { updateInput } = props;

  const [inputField, setInputField, isFull] = useInputForm(15);
  const handleSubmit = (event) => {
    event.preventDefault();
    // updateInput expects an argument of type {target: {value: ''}}
    updateInput({ target: { value: inputField } });
  };

  return (
    <div className={container}>
      <form className={form} onSubmit={handleSubmit}>
        <h2 className={classes.title1}>Hello, there!</h2>
        <h3 className={classes.title2}>What's your name?</h3>
        <div className={classes['input-container']}>
          <label className={classes.label} for="username">
            {!isFull ? '' : 'Username must be 15 chars or less'}
          </label>
          <input
            className={classes.input}
            value={inputField}
            id="username"
            type="text"
            onChange={setInputField}
          />
        </div>
      </form>
    </div>
  );
}
