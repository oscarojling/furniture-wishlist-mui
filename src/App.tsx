import "./index.css";
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  List,
  Paper,
  Container,
  Stack,
  ListItem,
  IconButton,
  ListItemText,
  Box,
  Fade,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChairIcon from "@mui/icons-material/Chair";

function App() {
  const [list, setList] = useState<string[]>(
    localStorage.getItem("furniture-wishlist")
      ? JSON.parse(localStorage.getItem("furniture-wishlist")!)
      : [],
  );

  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    setList([...list, userInput]);
    setUserInput("");
  };

  useEffect(() => {
    localStorage.setItem("furniture-wishlist", JSON.stringify(list));
  }, [list]);

  const deleteItem = (removeItem: number) => {
    const newList = list.filter((_, index) => index !== removeItem);
    setList(newList);
  };

  const removeItems = () => {
    localStorage.removeItem("furniture-wishlist");
    setList([]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container maxWidth="sm" sx={{ mt: 4, flex: "1" }}>
        <Header />
        <Paper elevation={6} sx={{ p: 2, bgcolor: "#f5f5f5", borderRadius: 5 }}>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Add furniture..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                bgcolor: "#a87a3f",
              }}
            >
              Add to wishlist
            </Button>
            <Button
              variant="contained"
              onClick={removeItems}
              sx={{
                bgcolor: "#a87a3f",
              }}
            >
              Remove all from wishlist
            </Button>
          </Stack>
        </Paper>
        <List>
          {list.map((item, index) => (
            <Fade in={true} key={index} timeout={700}>
              <ListItem
                key={index}
                sx={{
                  mb: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  boxShadow: "1px 1px 1px black",
                }}
              >
                <ChairIcon sx={{ color: "#a87a3f", mr: 2 }}></ChairIcon>
                <ListItemText primary={item} />
                <IconButton edge="end" onClick={() => deleteItem(index)}>
                  <ClearIcon />
                </IconButton>
              </ListItem>
            </Fade>
          ))}
        </List>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
