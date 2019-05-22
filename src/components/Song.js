import React from 'react';

const Song = (props) => {
  // console.log(props.songObj.title)
  return (
    <tr className="song">
      <td>{props.songObj.title}</td>
      <td>{props.songObj.singer}</td>
      <td>{props.songObj.likes}</td>
      <td>{props.songObj.dislikes}</td>
      <td>{props.songObj.plays}</td>
      <td><button onClick={() => props.handleClick(props.songObj)}>Play</button></td>
    </tr>
  )
}

export default Song;
