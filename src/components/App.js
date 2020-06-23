import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from 'components/HomePage';
import Board from 'components/Board';
import io from 'socket.io-client';

export default function App() {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL);

    socket.on('message', (message) => {
      alert(message);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/game/:gameId" component={Board} />
      <Redirect to="/" />
    </>
  );
}
