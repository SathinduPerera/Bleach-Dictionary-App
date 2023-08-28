import express from "express";
import fs from "fs"
import bodyParser from "body-parser"

let getArr = []

const app = express();

app.use(bodyParser.json())

let raw = fs.readFileSync("characters.json");
let data = JSON.parse(raw);
// data.forEach(element => {
//     if()
// });
console.log(data[0])


app.get("/api", (req, res) => {
    res.json(data)
})

app.post("/api/post", (req, res) => {
    console.log(req.body.selections);
    res.json({"message": "Options submitted"})
})

app.listen(5000, () => {
    console.log("Server running in port 5000")
})