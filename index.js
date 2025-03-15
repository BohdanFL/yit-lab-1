import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!",
    });
});

app.get("/new", (req, res) => {
    res.json({
        message: "New Fixed World!",
    });
});

app.get("/world", (req, res) => {
    res.json({
        name: "Universe",
        population: 8 * 10**8,
        size: "13.8 billion light-years",
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
