import React from 'react';
import { CSSTransition } from 'react-transition-group';
import UsernameFormPrompt from 'components/UsernameFormPrompt';
import GameLinkPrompt from 'components/GameLinkPrompt';
import useInputForm from 'hooks/useInputForm';
import useToggle from 'hooks/useToggle';
import classes from 'components/HomePage.module.css';
import { content, container, btn } from 'shared/styles.module.css';
import 'shared/transitions.css';

export default function SignIn() {
  const [username, setUsername] = useInputForm();
  const [gameLinkPrompt, toggleGameLinkPrompt] = useToggle();

  const UsernameFormPromtComponent = (
    <CSSTransition
      in={username === ''}
      timeout={1000}
      classNames="slide-up"
      unmountOnExit
    >
      <UsernameFormPrompt updateInput={setUsername} />
    </CSSTransition>
  );

  const HomePageContent = (
    <div className={container} style={{ textAlign: 'center' }}>
      <div className={content}>
        <h1 className={classes.title}>
          Welcome, {username || 'unknown fellow'}
        </h1>
        <div className={classes['btn-container']}>
          <button
            onClick={toggleGameLinkPrompt}
            className={`${btn} ${classes['homepage-btn']}`}
          >
            New game
          </button>
          <button className={`${btn} ${classes['homepage-btn']}`}>
            Join game
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {UsernameFormPromtComponent}
      {HomePageContent}
      {gameLinkPrompt && <GameLinkPrompt />}
    </>
  );
}
