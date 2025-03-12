import axios from "axios";

const API_URL = "http://localhost:5000/api/items"; // Replace with your backend URL

export const getItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};

export const createItem = async (itemData) => {
    try {
        const response = await axios.post(API_URL, itemData);
        return response.data;
    } catch (error) {
        console.error("Error creating item:", error);
    }
};

export const updateItem = async (id, itemData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, itemData);
        return response.data;
    } catch (error) {
        console.error("Error updating item:", error);
    }
};

export const deleteItem = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return { message: "Item deleted successfully" };
    } catch (error) {
        console.error("Error deleting item:", error);
    }
};
