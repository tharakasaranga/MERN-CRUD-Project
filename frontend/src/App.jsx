import { useEffect, useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { getItems, addItem, updateItem, deleteItem } from "./services/itemService";
import "./app.css";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch items on load
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  const handleAddOrUpdate = async (item) => {
    if (selectedItem) {
      await updateItem(selectedItem._id, item);
    } else {
      await addItem(item);
    }
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const clearSelection = () => setSelectedItem(null);

  return (
    <div className="container">
      <h1>MERN CRUD App</h1>
      <ItemForm
        onSubmit={handleAddOrUpdate}
        selectedItem={selectedItem}
        clearSelection={clearSelection}
      />
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
