import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songLyrics: {},
    filter: ""
  }

  onPlay = (props) => {
    this.setState({
      songLyrics: {
        title: props.title,
        lyrics: props.lyrics
      }
    })
  }

  filterChange = (e) => {
      this.setState({
      filter:e.target.value
    })
  }

filterBySong = (filter) => {
  let allSongs = this.props.songs
  const song = allSongs.filter(song=> song.title.includes(filter))
  return song
}


  render() {
    const { songs } = this.props
    const { songLyrics, filter } = this.state
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterChange={this.filterChange}filterValue={filter}/>
          <SongList onPlay={this.onPlay}songs={this.filterBySong(filter)}/>
        </div>
        <KaraokeDisplay songLyrics={songLyrics}/>
      </div>
    );
  }
}

export default KaraokeContainer;
