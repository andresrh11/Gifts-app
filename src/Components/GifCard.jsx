export const GifCard = ({ id, url, title }) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} key={id} className="card img" />
      <p key={title} className="card p">
        {title}
      </p>
    </div>
  );
};
