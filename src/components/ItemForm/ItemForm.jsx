import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export function ItemForm({ onPost }) {
  const history = useHistory();
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const newImage = {
    path: path,
    description: description,
    likes: 0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/gallery", {
      method: "POST",
      body: JSON.stringify(newImage),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setPath("");
        setDescription("");
        onPost();
        history.push("/");
      })
      .catch((error) => {
        alert(error);
        console.error(error);
        res.sendStatus(500);
      });
  };

  const returnToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddAPhotoIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add an image:
          </Typography>
          <Box
            component="form"
            onSubmit={path && description === "" ? null : handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="path"
              label="Image URL"
              name="path"
              autoFocus
              onChange={(event) => setPath(event.target.value)}
              value={path}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body">
                  Return to gallery?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
