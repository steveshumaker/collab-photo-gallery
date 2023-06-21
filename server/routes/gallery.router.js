const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  const id = req.params.id;
  const addLikeQuery = `UPDATE pictures SET likes=likes+1 WHERE id=$1;`;
  pool
    .query(addLikeQuery, [id])
    .then((response) => {
      res.status(200).send(response.rows);
    })
    .catch((error) => {
      alert(error);
      console.error(error);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  // res.send(galleryItems);
  const getImagesQuery = `SELECT * FROM pictures ORDER BY id;`;
  pool
    .query(getImagesQuery)
    .then((result) => {
      console.log(result);
      res.send(result.rows);
    })
    .catch((error) => {
      alert(error);
      console.error(error);
      res.sendsStatus(500);
    });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
  const newImage = req.body;
  const addImageQuery = `INSERT INTO pictures (path, description, likes) 
                         VALUES ($1, $2, $3);`;

  pool.query(addImageQuery, [newImage.path, newImage.description, 0])
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    alert(error);
    console.error(error);
    res.sendStatus(500);
  })
});

module.exports = router;
