import { useState, useEffect } from "react";

const ItemForm = ({ onSubmit, selectedItem, clearSelection }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedItem) setName(selectedItem.name);
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name });
    setName("");
    clearSelection();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">{selectedItem ? "Update" : "Add"}</button>
    </form>
  );
};

export default ItemForm;
