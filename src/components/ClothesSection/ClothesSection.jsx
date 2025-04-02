import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ onCardClick }) {
    return (
    <div className="clothes-section">
        <div>
            <p>Your Items</p>
            <button>+ Add New</button>
        </div>
        <ul className="clothes-section__items">
          {defaultClothingItems.map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                //   TODO - pass as prop
                  onCardClick={onCardClick}
                />
              );
            })}
        </ul>
    </div>
    );
}


export default ClothesSection;