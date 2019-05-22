import React from 'react';
import Song from './Song'

const SongList = (props) => {
  let filterSongs = props.songs.filter(song => song.title.toLowerCase().includes(props.filter.toLowerCase()))
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

        {filterSongs.map((song) => {
          return <Song song={song} playClick={props.playClick} />
        })}
        
      </tbody>
    </table>
  )
}

export default SongList;
