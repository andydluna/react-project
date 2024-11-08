export default function SongPreview(props) {
  const URL = `https://open.spotify.com/embed/track/${props.ID}`;
  return (
    <iframe
      className="preview"
      src={URL}
      width="600"
      height="350"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}
