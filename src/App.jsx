import './App.css';
import { YourClientId } from './.credentials';
import { YourClientSecret } from './.credentials';
import { Buffer } from 'buffer';

function App() {
  const client_id = YourClientId;
  const client_secret = YourClientSecret;

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

    return await response.json();
  }

  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
