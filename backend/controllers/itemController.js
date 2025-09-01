const Item = require("../models/Item");

// @desc Get all items
const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// @desc Add new item
const addItem = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const newItem = new Item({ name });
  await newItem.save();
  res.status(201).json(newItem);
};

// @desc Update item
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );

  if (!updatedItem) return res.status(404).json({ message: "Item not found" });

  res.json(updatedItem);
};

// @desc Delete item
const deleteItem = async (req, res) => {
  const { id } = req.params;
  const deletedItem = await Item.findByIdAndDelete(id);

  if (!deletedItem) return res.status(404).json({ message: "Item not found" });

  res.json({ message: "Item deleted" });
};

module.exports = { getItems, addItem, updateItem, deleteItem };
