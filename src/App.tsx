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
  MenuItem,
  Chip,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChairIcon from "@mui/icons-material/Chair";
import type { FurnitureType } from "./types/types";

function App() {
  const [list, setList] = useState<FurnitureType[]>(
    localStorage.getItem("furniture-wishlist")
      ? JSON.parse(localStorage.getItem("furniture-wishlist")!)
      : [],
  );

  const [userInput, setUserInput] = useState("");
  const [roomInput, setRoomInput] = useState("");

  const handleClick = () => {
    const newItem: FurnitureType = {
      id: Date.now().toString(),
      name: userInput,
      room: roomInput,
    };
    setList([...list, newItem]);
    setUserInput("");
    setRoomInput("");
  };

  useEffect(() => {
    localStorage.setItem("furniture-wishlist", JSON.stringify(list));
  }, [list]);

  const deleteItem = (removeItem: string) => {
    const newList = list.filter((item) => item.id !== removeItem);
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
            <TextField
              select
              label="Room"
              value={roomInput}
              onChange={(e) => setRoomInput(e.target.value)}
            >
              <MenuItem value="Living Room">Living Room</MenuItem>
              <MenuItem value="Bedroom">Bedroom</MenuItem>
              <MenuItem value="Kitchen">Kitchen</MenuItem>
              <MenuItem value="Bathroom">Bathroom</MenuItem>/
            </TextField>

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
          {list.map((item) => (
            <Fade in={true} key={item.id} timeout={700}>
              <ListItem
                sx={{
                  mb: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  boxShadow: "1px 1px 1px black",
                }}
              >
                <ChairIcon sx={{ color: "#a87a3f", mr: 2 }}></ChairIcon>
                <ListItemText primary={item.name} secondary={item.room} />
                <Chip
                  label={item.room}
                  size="small"
                  sx={{ bgcolor: "#a87a3f", color: "white", mr: 1 }}
                ></Chip>
                <IconButton edge="end" onClick={() => deleteItem(item.id)}>
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
