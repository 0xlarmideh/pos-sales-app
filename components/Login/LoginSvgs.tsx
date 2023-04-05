import { Container } from "@mui/material";
import styles from "../../src/styles/Image.module.css";

const LoginSvgs = () => {
  return (
    <Container
      sx={{
        height: "170px",
        position: "relative",
      }}
    >
      <img
        src="/food/food.svg"
        loading="lazy"
        alt="food"
        width="60px"
        className={styles.image1}
      />
      <img
        src="/food/food3.svg"
        loading="lazy"
        alt="food1"
        width="60px"
        className={styles.image2}
      />
      <img
        src="/food/food2.svg"
        loading="lazy"
        alt="food2"
        width="60px"
        className={styles.image3}
      />
    </Container>
  );
}

export default LoginSvgs
