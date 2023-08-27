import express from "express";
import fs from "fs"

const app = express();

let raw = fs.readFileSync("characters.json");
let data = JSON.parse(raw);
console.log(data)


app.get("/api", (req, res) => {
    res.json(data)
})

app.listen(5000, () => {
    console.log("Server running in port 5000")
})