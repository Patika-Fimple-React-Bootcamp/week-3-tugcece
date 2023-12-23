import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isOpen, onClose, product, onEdit }) => {
   
    const [editedItem, setEditedItem] = useState({...product});
    console.log("Modal", product);
    
      useEffect(() => {
        setEditedItem({ ...product });
      }, [product]);
    
       const handleItemChange = (e) => {
         const { name, value } = e.target;
         setEditedItem((prevProduct) => ({ ...prevProduct, [name]: value }));
       };

       const handleSaveItem = () => {
         onEdit(editedItem);
         onClose();
          toast.success("Changes Saved!!!", {
            position: "top-right",
            autoClose: 3000
          });
       };




    return (
      <div className={`modal ${isOpen ? "open" : "close"}`}>
        <div>
          <span className="closeModal" onClick={onClose}>
            &times;
          </span>
          <p>Title: {product.id}</p>
          <p>Price: {product.price}</p>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={editedItem.price}
            onChange={handleItemChange}
          />

          <p>Title: {product.title}</p>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedItem.title}
            onChange={handleItemChange}
          />
          <button onClick={handleSaveItem}>Save</button>
        </div>
      </div>
    );};
export default Modal;
