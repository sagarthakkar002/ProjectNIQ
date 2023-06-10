import React from "react";
import { Box, Typography } from "@mui/material";
import './product-details.css'
import { useProduct } from "../../context/product-context/product-context";

const productDetailsStyle={ margin: "1rem 1rem 1rem 0", flex: 1 }
const imgContainerStyle={ flex: 2 }
const contentContainerStyle={ display: "flex", alignItems: "center", marginBottom:"16px" }

const ProductDetails = () => {
  const { productDetails :product} = useProduct();
  return (
    product && (
      <Box>
        <Typography variant="h4" marginBottom={2} fontWeight={"bold"}>
          {product?.title}
        </Typography>
        <Box sx={contentContainerStyle}>
          <Box sx={productDetailsStyle}>
            <span className="category">{product?.category}</span>
            <div className="sku">SKU: {product.id}</div> 
            <span className="price">$ {product.price}</span>
          </Box>
          <Box sx={imgContainerStyle}>
            <img src={product?.image} className="product-image"/>
          </Box>
        </Box>
        <Box>{product?.description}</Box>
      </Box>
    )
  );
};

export default ProductDetails;
