import React, { useState, useEffect } from "react";
import { getItems, createItem, updateItem, deleteItem } from "../api";

const ItemManager = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: "", description: "" });
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        await createItem(newItem);
        setNewItem({ name: "", description: "" });
        fetchItems();
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        await updateItem(editItem._id, editItem);
        setEditItem(null);
        fetchItems();
    };

    const handleDelete = async (id) => {
        await deleteItem(id);
        fetchItems();
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Manage Items</h2>

            <form
                onSubmit={editItem ? handleUpdate : handleCreate}
                style={formStyle}
            >
                <input
                    type="text"
                    placeholder="Name"
                    value={editItem ? editItem.name : newItem.name}
                    onChange={(e) =>
                        editItem
                            ? setEditItem({ ...editItem, name: e.target.value })
                            : setNewItem({ ...newItem, name: e.target.value })
                    }
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={editItem ? editItem.description : newItem.description}
                    onChange={(e) =>
                        editItem
                            ? setEditItem({ ...editItem, description: e.target.value })
                            : setNewItem({ ...newItem, description: e.target.value })
                    }
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    {editItem ? "Update" : "Create"}
                </button>
            </form>

            <ul style={listStyle}>
                {items.map((item) => (
                    <li key={item._id} style={listItemStyle}>
                        <div style={itemDetailStyle}>
                            <strong>{item.name}</strong> - {item.description}
                        </div>
                        <div style={buttonContainerStyle}>
                            <button
                                onClick={() => setEditItem(item)}
                                style={editButtonStyle}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(item._id)}
                                style={deleteButtonStyle}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Inline styling for the components
const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    padding: '30px',
    borderRadius: '8px',
    width: '80%',
    margin: '20px auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
};

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

const listStyle = {
    listStyleType: 'none',
    padding: '0',
    marginTop: '30px',
};

const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const itemDetailStyle = {
    flex: 1,
    fontSize: '16px',
    color: '#555',
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
};

const editButtonStyle = {
    padding: '8px 12px',
    fontSize: '14px',
    backgroundColor: '#f39c12',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

const deleteButtonStyle = {
    padding: '8px 12px',
    fontSize: '14px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default ItemManager;
