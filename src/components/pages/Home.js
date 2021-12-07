function Home() {
  return (
    <div className="container">
      <p>
        <strong>{props.name}</strong> <br />
        <small>{props.description}</small>
      </p>
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.imageUrl} alt={`imagem de ${props.name}`} />
        </figure>
      </div>
      <p>
        <small>{props.reviews}</small>
      </p>
    </div>
  );
}

export default Home;
