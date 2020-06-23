import React from 'react';
import uuid from 'uuid/dist/v4';
import { Link } from 'react-router-dom';
import classes from 'components/GameLinkPrompt.module.css';
import { btn } from 'shared/styles.module.css';

export default function GameLinkPrompt() {
  const gameId = uuid();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>HI, YOUR LINK IS {gameId}</h1>
        <Link to={`/game/${gameId}`} className={btn}>
          Go to game
        </Link>
      </div>
    </div>
  );
}
