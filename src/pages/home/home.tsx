import { Outlet, useNavigate } from "react-router-dom";
import CustomSelect from "../../shared/components/ui/CustomSelect";
import { Box, Grid } from "@mui/material";
import {
  useProduct,
} from "../../context/product-context/product-context";
import { useCategory } from "../../context/category-context/category-context";

const Home = () => {
  let navigate = useNavigate();

  const { categories, setSelectedCategory, selectedCategory } = useCategory();
  const { products, setSelectProduct, selectProduct } = useProduct();

  const handleChange = (e: any) => {
    setSelectedCategory(e.target.value);
    navigate("comparison");
  };

  const handleProductChange = (e: any) => {
    setSelectProduct(e.target.value);
    navigate("product-details");
  };

  const formattedData = (categories || []).map((eachCategory: any) => {
    return {
      id: eachCategory,
      name: eachCategory,
    };
  });

  const formattedDataproduct = (products || []).map((eachProduct: any) => {
    return {
      id: String(eachProduct.id),
      name: eachProduct.title,
    };
  });

  return (
    <Grid container spacing={2} sx={{ padding: "16px" }}>
      <Grid item xs={12} sm={12} md={4}>
        <Box sx={{ marginBottom: "16px" }}>
          <CustomSelect
            handleChange={handleChange}
            value={selectedCategory}
            options={formattedData}
            labelName="Category"
            isDisabled={false}
          />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <CustomSelect
            handleChange={handleProductChange}
            value={selectProduct}
            isDisabled={formattedDataproduct.length === 0}
            options={formattedDataproduct}
            labelName="Products"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Home;
