export default function SongPreview(props) {
  const URL = `https://open.spotify.com/embed/${props.type}/${props.ID}`;
  let height = '350';
  if (props.type == 'album') height = '500';
  return (
    <iframe
      className="preview"
      src={URL}
      width="100%"
      height={height}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}
