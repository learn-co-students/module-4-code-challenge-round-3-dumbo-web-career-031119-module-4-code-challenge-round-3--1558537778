import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';
import NavBar from '../components/NavBar'

const endpoint = 'http://localhost:4000/users/2/songs'
class KaraokeContainer extends Component {
  
  state = {
    shownlyrics: '',
    title: '',
    filterTerm: '',
    object: {},
    playing: false,
    // playcount: 0,
    queue: [],
  }

  handleClick = (obj) => {
    // play BUTTON in here
    //here i click get the obj send that obj down karaokedisplaay show the lyrics
    // console.log(obj)
    this.setState({
      shownlyrics: obj.lyrics,
      title: obj.title,
      object: obj,
      playing: !this.state.playing,
      // playcount: this.state.playcount + 1,
      queue: [...this.state.queue, obj]
    })

    console.log('I WANT TO PATCH PLAYS HEREEEEE')
    const id = obj.id
    const copyplays = obj.plays

    // componentDidMount(){
      fetch(endpoint + '/' + id,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "plays": copyplays + 1
        })
      })
      .then(response => response.json())
      .then(console.log('done'))
    // }
  }

  handleChange = (event) => {
    //here I change filter Term to whatever is type in
    console.log(event.target.value)
    this.setState({
      filterTerm: event.target.value
    })
  }

  ///here I would show the queue


  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange}/>
          <NavBar queue={this.state.queue}/>
          <SongList  filterTerm={this.state.filterTerm} handleClick={this.handleClick} songs={this.props.songs}/>
        </div>
        <KaraokeDisplay  handleDislikeIncrement={this.props.handleDislikeIncrement} handleLikeIncrement={this.props.handleLikeIncrement} playing={this.state.playing} object={this.state.object} lyrics={this.state.shownlyrics} title={this.state.title}/>
      </div>
    );
  }
}

export default KaraokeContainer;
// playcount={this.state.playcount}