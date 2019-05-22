import React from 'react';
import Song from './Song';
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

        {props.songs.filter(song => song.title.toLowerCase().includes(props.filterTerm.toLowerCase())).map(song => <Song handleClick={props.handleClick} songObj={song}/> )}
        {/* {props.songs.map(song => <Song handleClick={props.handleClick} songObj={song}/> )} */}
        
      </tbody>
    </table>
  )
}

export default SongList;


// 11:43 finished milestone 1