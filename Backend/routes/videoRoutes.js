import express from "express";
import fs from "fs";
import crypto from "crypto";

const router = express.Router();


function readData() {
    const videosData = fs.readFileSync("./data/videoData.json");
    const parsedData = JSON.parse(videosData);
    return parsedData;
  }


  router.get("/", (req, res) => {
    const videos = readData();
    res.json(videos);
  });

  router.get("/:id", (req, res) => {
    const videos = readData();
    const singleVideo = videos.find((video) => video.id === req.params.id);
    if (singleVideo) {
      res.json(singleVideo);
    } else {

      res.status(404).json({
        message: "Please enter a valid ID",
        error: "404",
      });
    }
  });



router.post("/", (req, res) => {
    
    const newVideo = {
      title: req.body.title,
      description: req.body.description
    };
  
    console.log(req.body);
    const videos = readData();
  
  
    videos.push(newVideo);

    
    fs.writeFileSync("./data/videoData.json", JSON.stringify(videos));
  

    res.status(201).json(newVideo);
  
   
  });

  export default router;