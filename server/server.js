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
    if(arr[0] == "All") {
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


//   function filter (position, arr) {
//     let returnArr= []
//     arr.forEach(element => {
//         if(element.Position === position){
//            returnArr.push(element)
//         }
//     });
//     return returnArr;
//   }

app.get("/api", (req, res) => {
    res.json(data)
})

// app.post("/api/post", (req, res) => {
//     let getArr = []
//     let all = req.body.all
//     let captain = req.body.captain
//     let lieutenant = req.body.lieutenant
//     let formerCap = req.body.formerCap
//     let sub = req.body.sub
//     let other = req.body.other

//     console.log(all, captain, lieutenant, formerCap, sub, other)

//     if (all) {
//         getArr = data
//     } else {
//         if(other) {
//             let arr = filter("Other", data)
//             arr.forEach(element => getArr.push(element))
//         }
//         if (captain) {
//             let arr = filter("Captain", data)
//             arr.forEach(element => getArr.push(element))
//         }
//         if (lieutenant) {
//             let arr = filter("Lieutenant", data)
//             arr.forEach(element => getArr.push(element))
//         }
//         if (formerCap) {
//             let arr = filter("Former Captain", data)
//             arr.forEach(element => getArr.push(element))
//         }
//         if (sub) {
//             let arr = filter("Substitute Shinigami", data)
//             arr.forEach(element => getArr.push(element))
//         }
//     }

//     console.log(getArr)

//     fs.writeFileSync("Updated.json", JSON.stringify(getArr));

let userdata = []

app.post("/api/post", (req, res) => {
    userdata = req.body.selection_arr
    let arr = sort(userdata)
    console.log(arr)
    res.json({"data" : arr,
              "message" : "data dilivered successfully"})
})



// app.put("/api", (req, res) => {
//     console.log(req.body);
//     return res.json({
//         message : "put route"
//     })
// });


    // res.json({"message" : "form Submitted"})
// })

app.listen(5000, () => {
    console.log("Server running in port 5000")
})