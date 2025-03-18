import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { filterWeatherData } from "../../utils/weatherApi";
import CurrentTempatureUnitContext from "../../contexts/CurrentTempatureUnitContext";
import { useContext } from "react";

function Main({ weatherData, handleCardClick }) {
  // fill in more stuff and include 
  // const { currentTempatureUnit } = useContext(currentTempatureUnit)

if (!weatherData) return null;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <p className="main__description">
          {/* Today is {weatherData.temp.[currentTempatureUnit]} and it is {weatherData.type}  */}
        </p>
        <p className="main__description_slash"> / </p>
        <p className="main__description">You may want to wear:</p>
        <ul className="main__items">
          {defaultClothingItems
            .filter((item) => {
                return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
