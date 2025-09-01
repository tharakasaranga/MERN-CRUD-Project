import axios from "axios";

const API_URL = "http://localhost:5000/api/items";

// Get all items
export const getItems = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add new item
export const addItem = async (item) => {
  const res = await axios.post(API_URL, item);
  return res.data;
};

// Update item
export const updateItem = async (id, item) => {
  const res = await axios.put(`${API_URL}/${id}`, item);
  return res.data;
};

// Delete item
export const deleteItem = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
