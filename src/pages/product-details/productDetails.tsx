import React from "react";
import { useProduct } from "../../context/ProductContext";
import { Box, Typography } from "@mui/material";

const ProductDetails = () => {
  const { product } = useProduct();
  return (
    
        product && (
            <Box>
            <Typography variant="h4" fontWeight={"bold"}>
              {product?.title}
            </Typography>
            <Box sx={{ display: "flex"}}>
              <Box>
                {product?.category}
                <div>SKU: {product?.id}</div>
              </Box>
              <Box>
                <img src={product?.image} height={'150px'} width={'150px'}/>
              </Box>
            </Box>
            <Box>{product?.description}</Box>
          </Box>

  ))
};

export default ProductDetails;
