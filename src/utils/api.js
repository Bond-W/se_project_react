const baseUrl = 'http://localhost:3001';

const handleServerResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
    return fetch(`${baseUrl}/items`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(handleServerResponse);
};

const addItem = ({ name, weather, link }) => {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            weather,
            link
        })
    }).then(handleServerResponse);
}

const removeItem = (id) => {
    return fetch(`${baseUrl}/items/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(handleServerResponse);
}

export { getItems, addItem, removeItem, handleServerResponse };