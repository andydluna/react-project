export default function Song(props) {
  function handleClick() {
    props.onPlay(props.track.id);
  }

  return (
    <div className="song">
      <img
        src={props.track.album.images[0].url}
        alt="album cover"
        width="100"
      />
      <p>{props.track.name}</p>
      <button onClick={handleClick}>Play</button>
    </div>
  );
}
