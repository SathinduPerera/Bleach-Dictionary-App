import {useState} from "react";

function Data() {
    const [data, setdata] = useState([{}])

    fetch("/api").then(response => response.json()).then(data => setdata(data))
    console.log(data)

    return (data)
}

export default Data;