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
        <div>
            <h2>Manage Items</h2>
            <form onSubmit={editItem ? handleUpdate : handleCreate}>
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
                />
                <button type="submit">{editItem ? "Update" : "Create"}</button>
            </form>

            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <strong>{item.name}</strong> - {item.description}{" "}
                        <button onClick={() => setEditItem(item)}>Edit</button>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemManager;
