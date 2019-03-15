import React, { Component } from "react";
import ReactMediaVisualizer from "react-media-visualizer";

class MediaPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: "soundcloud"
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="content" />
        <ReactMediaVisualizer
          playlist={this.state.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.state.playlistIsPlaying}
          theme={this.state.theme}
          currentSongIndex={this.state.currentSongIndex}
        />
      </React.Fragment>
    );
  }
}

export default MediaPlayer;
