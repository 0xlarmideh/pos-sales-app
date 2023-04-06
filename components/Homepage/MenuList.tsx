import { Container, Card, Typography, Divider } from "@mui/material";
import MenuData from "../../src/data/products.json";

const Products = MenuData;
const MenuList = () => {

  return (
    <Container sx={{width: "70vw", padding: "15px"}}>
      <Container
        sx={{
          display: "grid",
          height: "40vh",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
        }}
      >
        {Products.map((product) => {
          return (
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: `${product.color}`,
              }}
              key={product.id}
            >
              <Typography variant="h5">{product.category}</Typography>
              <Typography color="grey">{product.amount} items</Typography>
            </Card>
          );
        })}
      </Container>
      <Divider sx={{paddingTop: "15px"}} />
    </Container>
  );
};

export default MenuList;
