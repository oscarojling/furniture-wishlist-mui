import { Box, Typography, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3, mb: 2 }}>
      <HomeIcon sx={{ fontSize: 48, color: "#a87a3f", mb: 1}}></HomeIcon>
      <Typography variant="h2" sx={{
        fontWeight: 700, 
            color: "#2b231a",
      }}>
        Furniture Wishlist
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Furniture that I wish to add to my new apartment!
      </Typography>
      <Divider sx={{ borderColor: "#a87a3f", borderWidth: 2}}></Divider>
    </Box>
  );
};

export default Header
