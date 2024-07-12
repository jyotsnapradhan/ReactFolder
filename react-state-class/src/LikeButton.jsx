
import { useState } from "react";

export default function LikeButton(){
    let [likeClicked,setLikeClicked]=useState(false);
    let[countClick,setCountClick]=useState(0);
    let toggleLike=()=>{
        setLikeClicked(!likeClicked);
        setCountClick(countClick+1);
    }
    let styles={color:"red"};
    return(
        <div>
            <p>Count={countClick}</p>
            <p onClick={toggleLike}>
                {likeClicked?<i className="fa-solid fa-heart" style={styles}></i>:<i className="fa-regular fa-heart"></i>}
            
            {/* <i className="fa-solid fa-heart"></i> */}
            </p>
        </div>
    );
}