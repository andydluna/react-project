import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function DisplayMoods() {
  const [getMood, setMood] = useState('');
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

  const HandleClick = (mood) => {
    setMood(mood);
  };

  return (
    <div className="moods">
      {getMood === '' ? <p>Please choose an option:</p> : <h3>{getMood}</h3>}
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
    </div>
  );
}
