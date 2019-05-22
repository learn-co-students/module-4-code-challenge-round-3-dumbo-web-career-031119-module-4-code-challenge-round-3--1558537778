import React from 'react';

const Song = (props) => {
  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td>Likes</td>
      <td>Dislikes</td>
      <td>Plays</td>
      <td><button onClick={() => props.handlePlayClick(props.song)}>Play</button></td>
    </tr>
  );
};

export default Song;
