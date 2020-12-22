import { useState } from "react"


function MediaCard(props){
    let [count, setCount]  =useState(1)
    return <div className="box">
        <h2>{props.title + " ( "+ count +" )" }</h2>
        <p>{props.body}</p>
        <img alt = "Sample placeholder" src= {props.imageUrl} width="200" height = "200"/>
        <br/>
        <button onClick={() =>  setCount(++count) }>Update</button>
    </div>
}

export default MediaCard