import { useEffect, useState } from "react";
import "./App.css";
// import { Routes, Route} from 'react-dom'
import CurrentTempatureUnitContext from "../../contexts/CurrentTempatureUnitContext";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = (item) => {
    api.addItem(item).then((newItem) => {
      setClothingItems([newItem, ...clothingItem]);
    })
    .catch((err) => console.log(err));
  }

  const handleToggleSwitchChange = () => {
    currentTempatureUnit === "F"
      ? setCurrentTempatureUnit("C")
      : setCurrentTempatureUnit("F");
  };

  // const handleCardDelete = (card) => {
  //   api
  //     .removeItem(card.id)
  //     .then(() => {
  //       setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   APIkey.getItemList().then((items) => {
  //     setClothingItems(items);
  //   })
  //   .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="app">
      <CurrentTempatureUnitContext.Provider
        value={{ currentTempatureUnit, handleToggleSwitchChange }}
      >
        <div className="app__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                weatherData.temp && (
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                  />
                )
              }
            />
            <Route
              exact
              path="/profile"
              element={
                defaultClothingItems.length !== 0 && (
                  <Proflie
                    cards={clothingItems}
                    onCardClick={handleCardClick}
                    onCardDelete={handleCardDelete}
                    onAddNewClick={() => setActiveModal("")}
                  />
                )
              }
            />
          </Routes>
          <Footer />
        </div>
        <ModalWithForm
          title="New Garment"
          buttonText="Add garment"
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                name="option"
                className="modal__radio-input"
                id="hot"
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                name="option"
                className="modal__radio-input"
                id="warm"
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                name="option"
                className="modal__radio-input"
                id="cold"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      </CurrentTempatureUnitContext.Provider>
    </div>
  );
}

export default App;
