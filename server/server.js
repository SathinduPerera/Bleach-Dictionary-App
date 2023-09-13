import express from "express";
import fs from "fs"
import bodyParser from "body-parser"


const app = express();

app.use(bodyParser.json())

let raw = fs.readFileSync("characters.json");
let data = JSON.parse(raw);

function filter (position, arr) {
    let returnArr= []
    arr.forEach(element => {
        if(element.Position === position){
           returnArr.push(element)
        }
    });
    return returnArr;
}


function sort(arr) {
    let sendArr = []
    if(arr[0] == "All" || arr.length === 0) {
        return data
    } else {
        data.forEach((element) => {
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === element.Position) {
                    sendArr.push(element)
                }
            }
        })
        return sendArr;
    }
}


app.get("/api", (req, res) => {
    res.json(data)
    fs.writeFileSync("../client/src/client_chars.json", JSON.stringify(data))
})

let userdata = []

app.post("/api/post", (req, res) => {
    userdata = req.body.selection_arr
    let arr = sort(userdata)
    console.log(arr)
    res.json({"data" : arr,
              "message" : "data dilivered successfully"})
})



app.listen(5000, () => {
    console.log("Server running in port 5000")
})