const express = require("express");
const bodyParser = require("body-parser");

const Earth = require("./earth");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const earth = new Earth();

app.get("/", (req, res) => {
    console.log(earth);
    res.json(earth.toJSON());
});

app.post("/grow-population", (req, res) => {
    const { amount } = req.body;

    res.json({
        newPopulation: earth.growPopulation(amount),
    });
});

app.post("/decrease-water-level", (req, res) => {
    const { waterLevel } = req.body;
    res.json({
        newWaterLevel: earth.decreaseWaterLevel(waterLevel),
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
