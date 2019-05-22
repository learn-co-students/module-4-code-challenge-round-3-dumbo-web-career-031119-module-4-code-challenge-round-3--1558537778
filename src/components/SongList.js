import React from 'react';
import Song from './Song'
const SongList = (props) => {
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>

          <th>▶</th>
          <th>No of Plays</th>
        </tr>

        {props.songs.map(song=> <Song key={song.id}onPlay={props.onPlay} {...song} />)}
        
      </tbody>
    </table>
  )
}

export default SongList;
