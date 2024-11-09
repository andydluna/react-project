import { CardBody, CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Song(props) {
  function handleClick() {
    props.onPlay(props.track.id);
  }

  return (
    <div className="song">
      <Card>
        <Card.Title>{props.track.name}</Card.Title>
        <CardBody>
          <Card.Img
            variant="top"
            src={props.track.album.images[0].url}
            width="100"
            alt="album cover"
          />
        </CardBody>

        <CardFooter>
          <Button variant="primary" onClick={handleClick}>
            Play
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
