import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state ={
    songs:[],
    filterSongs:[],
    clickedLyrics: "",
  }

  // Fetching 

  componentDidMount(){
    fetch("http://localhost:4000/songs")
    .then(response => response.json())
    .then(songs => {
      this.setState({
        songs: songs,
        filterSongs: songs
      })
    })
  }

  //methods

  handlePlayClick = (song) => {
    // let played = song.play;
    let playSong = {...song, play: 1 };
    let songId = song.id;
    let lyrics = song.lyrics;
    this.setState({
      clickedLyrics: lyrics
    })
    fetch(`http:localhost:4000/users/:user_id/songs/${songId}/play` , {
    method: 'PATCH',
    headers: {
      'content-Type': 'application/json'
    },
    body : JSON.stringify(playSong)
  })
  }

  handleFilter = (word) => {
    // console.log(word);
    let newArray = [...this.state.songs].filter( song => {
      return song.title.toLowerCase() === word
    })
    console.log(newArray);
  }

  handleVote = () => {
    console.log("Pass");
  }

  render() {
    // console.log(this.state.songs);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleFilter={this.handleFilter}/>
          <SongList songs={this.state.filterSongs} handlePlayClick={this.handlePlayClick}/>
        </div>
        <KaraokeDisplay lyrics={this.state.clickedLyrics} handleVote={this.handleVote}/>
      </div>
    );
  }
}

export default KaraokeContainer;
