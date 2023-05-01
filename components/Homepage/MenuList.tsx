import React from "react";
import { Container, Card, Typography, Divider } from "@mui/material";
import MenuData from "../../src/data/products.json";
import  { useState } from "react";
import { black500 } from "../../config/colors";

const Products = MenuData;
const MenuList = () => {
  const[isOpen, setIsOpen]=useState(false)
  const [name, setName] =useState("")
  
  return (
    <Container sx={{ width: "70vw", padding: "15px" }}>
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
              onClick={() => {
                // Check if a category has already been toggled.
                if (isOpen === true) {
                  setIsOpen(false);
                  setIsOpen(true);
                } else {
                  setIsOpen(!isOpen);
                }
                setName(product.category);
              }}
            >
              <Typography variant="h5">{product.category}</Typography>
              <Typography color={black500} >{product.amount} items</Typography>
            </Card>
          );
        })}
      </Container>
      <Divider sx={{ paddingTop: "15px" }} />
      <Container sx={{ width: "70vw", padding: "15px" }}>
        {isOpen ? <Typography variant="h4">{name} </Typography> : null}
      </Container>
    </Container>
  );
};

export default MenuList;
