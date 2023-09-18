export const GifCard = ({ id, url, title }) => {
  return (
    <div key={id} className="card">
      <img src={url} alt="" key={id} />
      <li key={title} className="ttl">
        {title}
      </li>
    </div>
  );
};
