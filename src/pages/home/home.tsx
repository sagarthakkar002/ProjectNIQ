import { Outlet, useNavigate } from "react-router-dom";
import CustomSelect from "../../shared/components/ui/CustomSelect";
import { Box, Grid } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

const url = "https://fakestoreapi.com";

const Home = () => {
  let navigate = useNavigate();
  const {
    productList,
    productID,
    categories,
    loading,
    product,
    setProductID,
    setCategory,
    setProductUrl,
    category,
    setProductDeatilUrl,
  }: any = useProduct();

  const handleChange = (e: any) => {
    setCategory(e.target.value);
    const urlLink = url + "/products/category/" + e.target.value;
    console.log(urlLink);
    setProductUrl(urlLink);
    navigate("comparison")
  };

  const handleProductChange = (e: any) => {
    setProductID(e.target.value);
    const urlLink = `https://fakestoreapi.com/products/${e.target.value}`;
    setProductDeatilUrl(urlLink);
    navigate("product-details");
  };

  const formattedData = (categories || []).map((eachCategory: any) => {
    return {
      id: eachCategory,
      name: eachCategory,
    };
  });

  const formattedDataproduct = (productList || []).map((eachProduct: any) => {
    return {
      id: String(eachProduct.id),
      name: eachProduct.title,
    };
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Box sx={{ marginBottom: "16px" }}>
          <CustomSelect
            handleChange={handleChange}
            value={category}
            options={formattedData}
            labelName="Category"
            isDisabled={false}
          />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <CustomSelect
            handleChange={handleProductChange}
            value={productID}
            isDisabled={formattedDataproduct.length === 0}
            options={formattedDataproduct}
            labelName="Products"
          />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
