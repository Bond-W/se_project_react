import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  onCardClick,
  onAddClick,
  clothingItems,
  onCardDelete,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__button" onClick={onAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
