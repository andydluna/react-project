export default function Song(props) {
  return (
    <div className="song">
      <img
        src={props.track.album.images[0].url}
        alt="album cover"
        width="100"
      />
      <p>{props.track.name}</p>
      <button>Play</button>
    </div>
  );
}
