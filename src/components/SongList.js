import React, {Component} from 'react';
import Song from './Song.js';
import SoundBite from './SoundBite.js';
import Sound from 'react-sound';

const SongList = function (props) {
    const songComponents = props.songs.map((song, index) => {
      return (
        <Song
        name={song["im:name"].label} key={index}
        title={song["im:artist"].label} key={index}
        // soundBite={song.link.href}
        // playStatus={Sound.status.PLAYING}
        // playFromPosition={300 /* in milliseconds */}
        // onLoading={this.handleSongLoading}
        // onPlaying={this.handleSongPlaying}
        // onFinishedPlaying={this.handleSongFinishedPlaying}
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
