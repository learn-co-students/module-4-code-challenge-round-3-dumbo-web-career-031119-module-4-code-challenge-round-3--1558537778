import React from 'react';

const VoteBar = ({ songDisLikes,songLikes,songId, upTitle, voteUp, downTitle, voteDown }) => {
 console.log(songId)
  return (

    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={(e)=>voteUp(songId,songLikes)}
      >
        {"Like"}
      </button>
      <button
        className="pure-button down-button"
        onClick={(e)=>voteDown(songId,songDisLikes)}
      >
        {"Dislike"}
      </button>
    </div>
  )
}

export default VoteBar;
