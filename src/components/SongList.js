import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {props.songs.map(song => {
          return <Song song={song} handlePlayClick={props.handlePlayClick}/>;
        })
          /* Your Code Goes Here */
          }
        
      </tbody>
    </table>
  );
};

export default SongList;
