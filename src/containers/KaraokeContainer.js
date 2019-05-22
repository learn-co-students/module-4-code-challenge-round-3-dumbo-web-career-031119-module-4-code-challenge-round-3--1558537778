import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  state = {
    songLyrics: {}
  }

  onPlay = (props) => {
    this.setState({
      songLyrics: {
        title: props.title,
        lyrics: props.lyrics
      }
    })
  }

  render() {
    const { songs } = this.props
    const { songLyrics } = this.state

    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList onPlay={this.onPlay}songs={songs}/>
        </div>
        <KaraokeDisplay songLyrics={songLyrics}/>
      </div>
    );
  }
}

export default KaraokeContainer;
