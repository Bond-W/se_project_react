import "./ItemCard.css";
function ItemCard({ item, onCardClick, onCardDelete }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleDeleteClick = () => {
    onCardDelete(item);
  };

  return (
    <li className="clothing__item card">
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
      <div className="card__header">
        <p className="card__name">{item.name}</p>
        <button
          type="button"
          className="card__delete-button"
          onClick={handleDeleteClick}
        ></button>
      </div>
    </li>
  );
}

export default ItemCard;
