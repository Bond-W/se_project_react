# WTWR Project (WTWR) - Add Clothing Items, Temperature Toggle & Profile Page

## Overview
"WTWR" is an interactive web application where users can:
- Get the current weather.
- Add new clothes to their profile.
- Switch between Celcius and Fahrenheit.
- Delete Items with confirmation prompts.

The project follows modern web development practices, including modular JavaScript and reusable components. It also has full CRUD functionality with a mock backend server using JSON Server.

---



## Table of Contents

* [Overview](#overview)
* [Features](features)
* [Demo](#demo)
* [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [API Reference](#api-reference)
* [Acknowledgments](#acknowledgments)
* [Contact Me](#contact-me)

---



## Features
- **Temperature Unit Toggle:**
  - Toggle between Fahrenheit and Celsius.
  - Built using a custom ToggleSwitch component (checkbox-based with custom styling).
  - Uses React context to manage unit state globally.

- **Add Clothing Items:**
  - A form lets users add new clothing items with name, image URL, and weather condition.
  - Items are persisted using a POST request to JSON Server.

- **Delete Clothing Items**
  - Clicking an item's image opens a modal.
  - Users can delete items via a confirmation modal.
  - DELETE request updates the mock backend and state.

- **Profile Page:**
  - A /profile route shows the user's clothes and a hardcoded profile sidebar.
  - Each item includes delete functionality.

- **WeatherCard with API Intergration**
  - Fetches current temperature and conditions from the OpenWeather API.
  - Displays weather-appropriate items from the user's clothing collection.

- **Routing**
  - Uses React Router v6.
  - / renders the main weather-based recommendation view.
  - /profile shows all items and the sidebar.

- **Responsive UI:**
  - Clean separation of modals and reusable components.

---

## Demo
No public demo link is available yet.


---

## Getting Started

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Bond-W/se_project_react.git

2. Navigate to the project directory:
   ```bash
   cd react-1

3. Install the dependencies:
   ```bash
   npm install

## Usage
1. Start the mock API server:
   ```bash
   json-server --watch db.json --id _id --port 3001

2. Start the React application:
   ```bash
   npm run dev


---

## Technologies Used
- **HTML5** 
- **CSS3** 
- **JavaScript (ES6)** 
- **React**
- **React Router v6** 
- **Context API** 
- **JSON Server**
- **OpenWeatherMap API**

---

## Project Structure
src/
├── components/
│   ├── AddItemModal/
│   ├── ItemModal/
│   ├── ModalWithForm/
│   ├── WeatherCard/
│   ├── ToggleSwitch/
│   ├── Header/
│   ├── Footer/
│   ├── Profile/
│   ├── Main/
├── contexts/
│   └── CurrentTemperatureUnitContext.js
├── utils/
│   ├── api.js
│   ├── weatherApi.js
│   └── constants.js
├── App.js
├── index.js

---

## API Reference

### Base URL
- http://localhost:3001

### Endpoints 
- **Fetch all clothing items:** `GET /items`
- **Add a new item:** `POST /items`
- **Delete card:** `DELETE /items/:id`

---

## Acknowledgments
- **Practicum by TripleTen** for providing project inspiration and initial resources as well as support from staff.
- **OpenWeather** for real-time weather data.
- **json-server** for fast API prototyping.

## Contact Me
[GitHub](https://github.com/)
[LinkedIn](www.linkedin.com/in/bondawyatt)