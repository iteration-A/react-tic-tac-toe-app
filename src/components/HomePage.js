import React from 'react';
import { CSSTransition } from 'react-transition-group';
import UsernameFormPrompt from 'components/UsernameFormPrompt';
import useInputForm from 'hooks/useInputForm';
import classes from 'components/HomePage.module.css';
import { content, container, btn } from 'shared/styles.module.css';
import 'shared/transitions.css';

export default function SignIn() {
  const [username, setUsername] = useInputForm();

  const UsernameFormPromtComponent = (
    <CSSTransition in={username === ''} timeout={1000} classNames="slide-up" unmountOnExit>
      <UsernameFormPrompt updateInput={setUsername} />
    </CSSTransition>
  );

  const HomePageContent = (
    <div className={container}>
      <div className={content}>
        <h1 className={classes.title}>Welcome, {username}</h1>
        <div className={classes['btn-container']}>
          <button className={`${btn} ${classes['homepage-btn']}`}>New game</button>
          <button className={`${btn} ${classes['homepage-btn']}`}>Join game</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {UsernameFormPromtComponent}
      {HomePageContent}
    </>
  );
}
