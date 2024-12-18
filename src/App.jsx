import './App.css';
import { useState } from 'react';
import { YourClientId } from './.credentials';
import { YourClientSecret } from './.credentials';
import { Buffer } from 'buffer';
import Search from './components/search.jsx';
import Song from './components/song.jsx';
// import WebPlayback from './components/webplayback.jsx';
// import Login from './components/login.jsx';
import SongPreview from './components/songpreview.jsx';
import DisplayMoods from './components/displaymoods.jsx';

function App() {
  const client_id = YourClientId;
  const client_secret = YourClientSecret;
  const [accessToken, setAccessToken] = useState('');
  const [tracks, setTracks] = useState([]);
  const [track, setTrack] = useState('');

  // make it a hook.
  async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    });

    const data = await response.json();
    return data.access_token;
  }

  const searchTracks = async (query) => {
    try {
      if (track) {
        setTrack('');
      }
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setTracks(data.tracks.items);
    } catch (error) {
      console.error('Error fetching tracks:', error);
    }
  };

  const searchSong = (ID) => {
    setTrack(ID);
  };

  getToken().then((res) => setAccessToken(res));

  return (
    <div>
      <h1>Mood Based Player</h1>
      <DisplayMoods />
      <Search onSearch={searchTracks} />
      {track === '' ? (
        <div className="songs">
          {tracks.map((track) => (
            <Song track={track} key={track.id} onPlay={searchSong}></Song>
          ))}
        </div>
      ) : (
        <SongPreview ID={track} type={'track'} />
      )}
    </div>
  );
}

export default App;
