const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item._id}>
          {item.name}
          <div>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
