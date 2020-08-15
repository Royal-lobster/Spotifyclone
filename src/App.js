import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./Config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./Data/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [
    { token, current_playlist, playlists },
    dispatch,
  ] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        })
        .then((playlists) => {
          dispatch({
            type: "SET_CURRENT_PLAYLIST",
            current_playlist: "37i9dQZEVXbMDoHDwVN2tF",
          });
        });
    }
  }, []);

  useEffect(() => {
    spotify.getPlaylist(current_playlist).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
    console.log(playlists);
  }, [current_playlist, playlists]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
