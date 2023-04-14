import { Box } from "@mui/material";
import Hamburger from "./Hamburger";
import NavAvatar from "./NavAvatar";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import Profile from "./profile";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => setSearchOpen(!searchOpen);
  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchValue("");
  };
  const handleSearchChange = (e: { target: { value: string } }) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <Hamburger />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flex: 3,
        }}
      >
        <NavAvatar />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flex: searchOpen ? 2 : 1,
        }}
      >
        {searchOpen ? (
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "0 5px",
              height: "30px",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FiSearch size={16} />
            </button>
          </Box>
        ) : (
          <Box
            onClick={handleSearchClick}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <FiSearch size={24} />
          </Box>
        )}
        <Box>
          <Profile />
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
