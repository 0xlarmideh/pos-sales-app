import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "../navbar/Navbar";
import { ReactNode } from "react";
import styles from "../../src/styles/DashboardLayout.module.css";
import MenuList from "../Homepage/MenuList";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box>
            <a
              href="/test"
              className={`
                ${styles.link}
                ${isActive("/test") ? styles.active : ""}
              `}
            >
              Drinks
            </a>
          </Box>
          <Box>
            <a
              href="/test"
              className={`
                ${styles.link}
                ${isActive("/test") ? styles.active : ""}
              `}
            >
              Food
            </a>
          </Box>
          <Box>
            <a
              href="/test"
              className={`
                ${styles.link}
                ${isActive("/test") ? styles.active : ""}
              `}
            >
              Water
            </a>
          </Box>
          <Box>
            <a
              href="/test"
              className={`
                ${styles.link}
                ${isActive("/test") ? styles.active : ""}
              `}
            >
              Fast food
            </a>
          </Box>
          <Box>
            <a
              href="/test"
              className={`
                ${styles.link}
                ${isActive("/test") ? styles.active : ""}
              `}
            >
              Pizza
            </a>
          </Box>
          <Box>
            <a
              href="/test"
              className={`
                ${styles.link}
                ${isActive("/test") ? styles.active : ""}
              `}
            >
              Appetizer
            </a>
          </Box>
          <Box>
            <a
              href="/dashboard/sea-food"
              className={`
                ${styles.link}
                ${isActive("/dashboard/sea-food") ? styles.active : ""}
              `}
            >
              Sea food
            </a>
          </Box>
          <Box>
            <a
              href="/dashboard/sides"
              className={`
                ${styles.link}
                ${isActive("/dashboard/sides") ? styles.active : ""}
              `}
            >
              Sides
            </a>
          </Box>
        </Box>
        <Box sx={{ flex: 3 }}>
          <MenuList />
          {children}
        </Box>
        <Box sx={{ flex: 2 }}>Rightbar (Cart)</Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
