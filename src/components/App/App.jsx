import React from "react";
import { useState, useEffect } from "react";
import { GalleryList } from "../GalleryList/GalleryList.jsx";
import { ItemForm } from "../ItemForm/ItemForm.jsx";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const defaultTheme = createTheme();

function App() {
  const [imageList, setImageList] = useState([]);

  function getImages() {
    fetch("/gallery")
      .then((response) => response.json())
      .then((images) => {
        setImageList(images);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Error!");
      });
  }

  const goToForm = () => {
    history.push("/entry");
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
              <Toolbar>
                <CameraIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                  Steve's Image Gallery
                </Typography>
              </Toolbar>
            </AppBar>
            <main>
              {/* Hero unit */}
              <Box
                sx={{
                  bgcolor: "background.paper",
                  pt: 8,
                  pb: 6,
                }}
              >
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                  >
                    Pics Around the World
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    A gallery of images from my life, your life, things people
                    enjoy. Feel free to click on 'Add a Picture!' to add your
                    own image. Please be respectful of others with the images
                    you choose - thank you!
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button variant="contained">
                      <Link to="/entry">Add a picture!</Link>
                    </Button>
                  </Stack>
                </Container>
              </Box>
              <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  <GalleryList pics={imageList} onLike={getImages} />
                </Grid>
              </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
              <Typography variant="h6" align="center" gutterBottom>
                Thanks for visiting!
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
              >
                Developed by Steve Shumaker
              </Typography>
            </Box>
            {/* End footer */}
          </ThemeProvider>
        </div>
      </Route>
      <Route exact path="/entry">
        <div>
          <ItemForm onPost={getImages} />
        </div>
      </Route>
    </Router>
  );
}

export default App;
