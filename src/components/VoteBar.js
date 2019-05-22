import React from 'react';

// const VoteBar = ({ object, upTitle, voteUp, downTitle, voteDown }) => {
const VoteBar = (props) => {
  // console.log(upTitle)
  return (
    <div className="vote-bar">
      <button
        className="pure-button up-button"
        onClick={() => props.handleLikeIncrement(props.object)}
      >
        {/* {upTitle} */}
        Like
      </button>
      <button
        className="pure-button down-button"
        // onClick={voteDown}
        onClick={()=> props.handleDislikeIncrement(props.object)}
      >
        {/* {downTitle} */}
        Dislike
      </button>
    </div>
  )
}

export default VoteBar;
