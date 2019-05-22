import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar';
const KaraokeDisplay = (props) => {
  // console.log(props.object.likes)
  return (
    <div className="karaoke-display">
      {props.playing ? <VoteBar object={props.object} handleDislikeIncrement={props.handleDislikeIncrement} handleLikeIncrement={props.handleLikeIncrement} upTitle={props.object.likes}/> : null}
      <h2>{props.title}</h2>
      <Lyrics lyrics={props.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
