import "./ItemCard.css";
function ItemCard({ item, onCardClick, onCardDelete }) {



  const handleDeleteClick = () => {
    onCardDelete(item);
  };

  return (
    <li className="clothing__item card">
      <p className="card__name">{item.name}</p>
      <img
        onClick={() => onCardClick(item)}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
