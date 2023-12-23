import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

const Homepage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

const getData = async()=>{
  try {
         setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const responseData = response.data;
      setData(responseData);
      console.log(responseData);
  } catch (error) {
    console.log(error);
  }finally{
    setLoading(false);
  }
}  
//Get products when component mound
  useEffect (() => {
    getData();
  }, []);

// To delete products
const handleDelete = (id) =>{
  setData(prevProducts => prevProducts.filter(product => product.id !== id ));
};

//Modal dialog
const handleOpenModal = (data) => {
  setSelectedProduct(data);
};

const handleCloseModal = () =>{
  setSelectedProduct(null);
};

const handleSaveEdit = (editedProduct) => {
  setData((prevProducts) =>
    prevProducts.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    )
  );
};

  
  return (
    <>
      <h1>Products</h1>
      <div className="HomePage">
        {data.map((item) => (
          <ProductItem
            key={item.id}
            data={item}
            onDelete={handleDelete}
            onOpenModal={handleOpenModal}
          
          />
        ))}
        {selectedProduct && (
          <Modal
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={handleCloseModal}
            onEdit={handleSaveEdit}
          />
        )}
      </div>
    </>
  );
};

export default Homepage;