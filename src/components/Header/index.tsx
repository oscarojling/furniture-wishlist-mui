import { Box, Typography, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <Box sx={{ textAlign: "center", p: 3, mb: 2 }}>
      <HomeIcon sx={{ fontSize: 48, color: "#a87a3f", mb: 1 }}></HomeIcon>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: "#2b231a",
          fontStyle: "italic",
        }}
      >
        Furniture Wishlist
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontStyle: "italic", color: "#a87a3f" }}
      >
        Furniture that I wish to add to my new apartment!
      </Typography>
      <Divider sx={{ borderColor: "#a87a3f", borderWidth: 2 }}></Divider>
    </Box>
  );
};

export default Header;
