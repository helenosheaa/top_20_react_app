import React, {Component} from 'react';
import Song from './Song.js';

const SongList = function (props) {
    const songComponents = props.songs.map((song, index) => {
      return (
        <Song
        name={song["im:name"].label} key={index}
        title={song["im:artist"].label} key={index}
        >
        </Song>);
    });
    return (
      <ol>
        {songComponents}
      </ol>
    );
  }


export default SongList;
