import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./Config/spotify";
import { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("🙇", user);
      });
    }
  }, []);
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
