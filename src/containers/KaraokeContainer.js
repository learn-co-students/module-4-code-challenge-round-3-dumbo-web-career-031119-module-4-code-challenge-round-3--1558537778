import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songs: [],
    currentSong: {},
    filter: '',
    filterSongsArray: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
    .then((response) => {
      return response.json();
    }).then((songData) => {
      this.setState({
        songs: songData,
        filterSongsArray: songData
      })
    })
  }

  playClick = (song) => {
    this.setState({
      currentSong: song
    })
    fetch(`http://localhost:4000/users/1/songs/${song.id}/play`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  filterSearch = (event) => {
    this.setState({
      filter: event.target.value,
    })
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter filterSearch={this.filterSearch} filterState={this.state.filter}/>
          <SongList songs={this.state.filterSongsArray} playClick={this.playClick} filter={this.state.filter}/>
        </div>
        <KaraokeDisplay song={this.state.currentSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
