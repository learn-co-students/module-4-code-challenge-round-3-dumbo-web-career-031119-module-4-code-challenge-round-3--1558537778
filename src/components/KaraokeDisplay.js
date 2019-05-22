import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';

const KaraokeDisplay = (props) => {
  
  return (
    <div className="karaoke-display">
      <VoteBar handleVote={props.handleVote}/>
      <h2>Song Title</h2>
      <Lyrics lyrics={props.lyrics} />
    </div>
  );
};

export default KaraokeDisplay;
