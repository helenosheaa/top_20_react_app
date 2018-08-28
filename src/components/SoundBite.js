import React, {Component} from 'react';
import Sound from 'react-sound';

const SoundBite = (props) => {
    return (
      <Sound {...props.url} />
    )
  }


export default SoundBite;
