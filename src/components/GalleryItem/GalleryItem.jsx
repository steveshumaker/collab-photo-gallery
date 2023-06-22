import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export function GalleryItem({ pic, onLike }) {
  const [imgDisplay, setImgDisplay] = useState(true);

  const handleClick = () => {
    setImgDisplay(!imgDisplay);
  };

  const addLike = (id) => {
    fetch(`gallery/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      onLike();
      console.log(response);
    });
  };

  const deleteImage = (id) => {
    fetch(`gallery/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      onLike();
      console.log(response);
    });
  };

  return (
    <div key={pic.id}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={pic.path}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography>{pic.description}</Typography>
          <hr />
          <Typography>Likes: {pic.likes}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => addLike(pic.id)} size="small">
            Like
          </Button>
          <Button onClick={() => deleteImage(pic.id)} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
