import React from 'react';

const VoteBar = ({ songId, upTitle, voteUp, downTitle, voteDown }) => {
 console.log(songId)
  return (

    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={(e)=>voteUp(songId)}
      >
        {"Like"}
      </button>
      <button
        className="pure-button down-button"
        onClick={(e)=>voteDown(songId)}
      >
        {"Dislike"}
      </button>
    </div>
  )
}

export default VoteBar;
