import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ProfileGridList from "../components/ProfileGridList/ProfileGridList";
import VideosList from "../components/VideosList/VideosList";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer";
import MusicCard from "../components/MusicCard/MusicCard";
import Songs from "../Songs.json";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import "./dashboard.css";

class Dashboard extends Component {
  state = {
    songs: Songs,
    currentSong: {},
    playlist: [],
    active: false
  };

  handleCardClick = (e, song) => {
    e.preventDefault();
    this.setState({ currentSong: song });
  };

  render() {
    let songs = this.state.songs;
    let currentSong = this.state.currentSong;

    var renderCards = songs.map(song => (
      <li key={song.id}>
        <MusicCard
          id={song.id}
          cover={song.cover}
          covername={song.artist}
          profile={song.profilePic}
          producer={song.producer}
          artist={song.artist}
          title={song.title}
          onClick={e => this.handleCardClick(e, song)}
        />
      </li>
    ));
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Typography
              component="h2"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "250%",
                fontWeight: 100
              }}>
              More of what you want...
            </Typography>
            <Typography
              component="h2"
              variant="headline"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "100%",
                fontWeight: 100,
                paddingBottom: 10
              }}
              gutterBottom>
              Swipe thru the most popular tracks out now!
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <div data-uk-slider>
              <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-small">
                {renderCards}
              </ul>
              <a
                className="uk-position-top-left uk-position-small uk-hidden-hover"
                href="/"
                data-uk-slidenav-previous
                data-uk-slider-item="previous">
                <i className="fas fa-arrow-left" />
              </a>
              <a
                className="uk-position-top-right uk-position-small uk-hidden-hover"
                href="/"
                data-uk-slidenav-next
                data-uk-slider-item="next">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-1" />
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <Typography
              component="h2"
              variant="display4"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "100%",
                fontWeight: 100,
                paddingBottom: 10
              }}
              gutterBottom>
              Upcoming Artists & Producers
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProfileGridList />
          </div>
        </div>
        <br /> <br />
        <div className="row">
          <div className="col-xl-2 col-sm-0" />
          <div className="col-xl-8 col-sm-12">
            <VideosList />
          </div>
          <div className="col-xl-2 col-sm-0" />
        </div>
        <MusicPlayer
          // profile={doPlaySong.profile}
          artist={currentSong.artist}
          cover={currentSong.cover}
          alt={currentSong.artist}
          // songLink={doPlaySong.link}
          title={currentSong.title}
          src={currentSong.mp3}
          id={currentSong.id}
        />
      </div>
    );
  }
}

export default Dashboard;
