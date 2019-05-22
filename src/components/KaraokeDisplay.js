import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar'

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
    <VoteBar />
      <h2>{props.songLyrics.title}</h2>
      <Lyrics lyrics={props.songLyrics.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
