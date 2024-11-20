import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SongPreview from './songpreview';

export default function DisplayMoods() {
  const [getMood, setMood] = useState('');
  const [getID, setID] = useState('');

  const moods = [
    'Angry',
    'Sad',
    'Happy',
    'Anxious',
    'Calm',
    'Afraid',
    'Bored',
    'Romantic',
  ];

  const moodToAlbum = {
    Angry: '2KkMVsxymoNR7hRmBcMttd', // Lady Gaga - Born This Way
    Sad: '5XpEKORZ4y6OrCZSKsi46A', // Lana Del Rey - Norman F***ing Rockwell
    Happy: '05c49JgPmL4Uz2ZeqRx5SP', // Lady Gaga - Chromatica
    Anxious: '5vBpIxm8ws6pWyVmTWiGE1', // Björk - Vespertine
    Calm: '2DpEBrjCur1ythIZ10gJWw', // Lana Del Rey - Honeymoon
    Afraid: '0S0KGZnfBGSIssfF54WSJh', // Billie Eilish - When We All Fall Asleep, Where Do We Go?
    Bored: '6rTfUUv8Kefr6Uo3AaecXi', // Crystal Castles - Crystal Castles
    Romantic: '2PfGKHtqEX58bHtkQxJnWG', // Sade - Love Deluxe
  };

  const HandleClick = (mood) => {
    setMood(mood);
    setID(moodToAlbum[mood]);
  };

  return (
    <div className="moods">
      {getMood === '' ? <p>Please choose an option:</p> : <></>}
      <div>
        {moods.map((mood) => (
          <Button
            key={mood}
            variant="outline-dark"
            onClick={() => HandleClick(mood)}
          >
            {mood}
          </Button>
        ))}
      </div>
      {getMood === '' ? <></> : <SongPreview ID={getID} type={'album'} />}
    </div>
  );
}
