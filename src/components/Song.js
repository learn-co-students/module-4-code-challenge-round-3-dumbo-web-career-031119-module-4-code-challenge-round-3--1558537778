import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td>{props.song.likes}</td>
      <td>{props.song.dislikes}</td>
      <td>{props.song.plays}</td>
      <td><button onClick={() => props.playClick(props.song)} >Play</button></td>
    </tr>
  )
}

export default Song;
