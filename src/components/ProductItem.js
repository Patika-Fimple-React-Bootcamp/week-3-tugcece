import React from "react";


const ProductItem = ({ data, onDelete, onOpenModal}) => {

  return (
    <li
      className="product-item"
      id={data.id}
    >
      <span className="information">
        <span className="price">{data.price}₺</span>
        <button onClick={() => onOpenModal(data)}>Edit</button>
        <button className="close" onClick={() => onDelete(data.id)}>
          &times;
        </button>
      </span>

      <img src={data.image} alt="products" />
      <span>{data.title}</span>
    </li>
  );
};

export default ProductItem;
