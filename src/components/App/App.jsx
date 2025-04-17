import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, removeItem, addItem } from "../../utils/api";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModals = () => {
    setActiveModal("");
  };

  const handleDeleteClick = (card) => {
    setItemToDelete(card);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    if (!itemToDelete) return;

    removeItem(itemToDelete._id)
      .then(() => {
        const updatedItems = clothingItems.filter(
          (item) => item._id !== itemToDelete._id
        );
        setClothingItems(updatedItems);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setItemToDelete(null);
        setShowConfirmModal(false);
        closeActiveModals();
      });
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItem({ name, weather, link: imageUrl })
      .then((newItemFromServer) => {
        setClothingItems((prevItems) => [newItemFromServer, ...prevItems]);
        closeActiveModals();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        const transformed = data.map((item) => ({
          ...item,
          _id: item.id || item._id, 
          link: item.link || item.imageUrl, 
        }));
  
        setClothingItems(transformed);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <div className="app__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                  onCardDelete={handleDeleteClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          onClose={closeActiveModals}
          isOpen={activeModal === "add-garment"}
          onAddItemModalSubmit={handleAddItemModalSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModals}
          onDeleteRequest={handleDeleteClick}
        />
        <ConfirmModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmDelete}
          itemName={itemToDelete?.name}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
