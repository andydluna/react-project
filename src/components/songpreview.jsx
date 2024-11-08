export default function SongPreview(props) {
  const URL = `https://open.spotify.com/embed/track/${props.ID}`;
  return (
    <iframe
      src={URL}
      width="500"
      height="300"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}
