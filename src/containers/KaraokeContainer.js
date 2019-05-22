import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {
  render() {
    const { songs } = this.props
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter />
          <SongList songs={songs}/>
        </div>
        <KaraokeDisplay />
      </div>
    );
  }
}

export default KaraokeContainer;
