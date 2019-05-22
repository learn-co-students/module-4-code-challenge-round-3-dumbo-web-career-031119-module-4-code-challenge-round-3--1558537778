import React from 'react';
import Lyrics from './Lyrics';
import VoteBar from './VoteBar'

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
    {props.songLyrics.title ? <VoteBar songLikes={props.songLyrics.likes}songDisLikes={props.songLyrics.dislikes}songId={props.songLyrics.id} voteDown={props.votebarDown}voteUp={props.votebarUp}/> : null}
      <h2>{props.songLyrics.title}</h2>
      <Lyrics lyrics={props.songLyrics.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
