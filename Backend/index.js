import express from "express";
import cors from "cors";
import videoRoutes from "./routes/videoRoutes.js";


const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
    
})