import React, {Component} from 'react';

const Song = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h3>{props.title}</h3>
    </li>
  );
}

export default Song;
