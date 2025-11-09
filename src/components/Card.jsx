import "../styles/Card.css";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="reviews">
          {star}
          <p>{reviews}</p>
        </div>
        <div className="price">
          <p className="prev-price">{prevPrice}</p>
          <p className="new-price">${newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
