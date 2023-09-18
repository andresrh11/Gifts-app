export const GifCard = ({ id, url, title }) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} key={id} />
      <p key={title} className="ttl">
        {title}
      </p>
    </div>
  );
};
