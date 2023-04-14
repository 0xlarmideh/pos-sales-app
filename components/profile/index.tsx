import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { black500, black800 } from "../../config/colors";
import ProfilePopover from "./ProfilePopover";

const Profile = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5rem",
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            fontWeight: 600,
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            color: black800,
            whiteSpace: "nowrap",
          }}
        >
          John Doe
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: black500,
            fontSize: "0.6rem",
            whiteSpace: "nowrap",
          }}
        >
          Time In {formattedTime}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <ProfilePopover />
      </Box>
    </Box>
  );
};

export default Profile;
