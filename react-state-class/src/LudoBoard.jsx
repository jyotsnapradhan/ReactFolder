import { useState } from "react";
export default function LudoBoard(){

    // let [blueBtn,setBluebtn]= useState(0);
    // let [greenBtn,setGreenbtn]= useState(0);
    // let [yellowBtn,setYellowbtn]= useState(0);
    // let [redBtn,setRedbtn]= useState(0);

    //instead of taking these whole useSate variable we can initialize inside an object

    let [moves,setMoves] =useState({green:0,blue:0,red:0,yellow:0});
    let[arr,setArr]= useState(['no move']);
    
    let ludoButtonsClickedGreen=()=>{
        // moves.green=(moves.green)+1;
        // moves.blue=(moves.blue)+1;
        // moves.red=(moves.red)+1;
        // moves.yellow=(moves.yellow)+1;
        
        //setMoves({...moves, green: moves.green+1});
        // to call 2 args in setMoves function we're going to callback function

        setMoves((previousMove)=>{
                    return{...previousMove, green: previousMove.green+1};
                
        });
        console.log(`${moves.green}`);

        // arr.push('green moved');
        // setArr([arr]);
        //setArr([...arr,'green moved']);
        //we want to save previous value so
        setArr((prevArr)=>{return [...prevArr,'green moved']});
            
    }
    let ludoButtonsClickedBlue=()=>{
        setMoves((previousMove)=>{
                    return{...previousMove, blue: previousMove.blue+1};
        });
        console.log(`${moves.blue}`);
        //arr.push('blue moved');
        setArr([...arr,'blue moved']);
    }
    let ludoButtonsClickedYellow=()=>{
        setMoves((previousMove)=>{
                    return{...previousMove, yellow: previousMove.yellow+1};
        });
        console.log(`${moves.yellow}`);
    }
    let ludoButtonsClickedRed=()=>{
        setMoves((previousMove)=>{
                    return{...previousMove, red: previousMove.red+1};
        });
        console.log(`${moves.red}`);
    
    }
       return(
        <div>
            <h1>Game Begins</h1>
            
            <div className="gameBoard">
                <p>Green Moves= {moves.green}</p>
                <p>{arr}</p>
                <button style={{backgroundColor:'green'}} onClick={ludoButtonsClickedGreen}>+1</button>
                <p>Blue Moves ={moves.blue}</p>
                
                <button style={{backgroundColor:'blue'}} onClick={ludoButtonsClickedBlue}>+1</button>
                <p>Yellow Moves ={moves.yellow}</p>
                
                <button style={{backgroundColor:'yellow',color:'black'}} onClick={ludoButtonsClickedYellow}>+1</button>
                <p>Red Moves ={moves.red}</p>
                <button style={{backgroundColor:'red'}} onClick={ludoButtonsClickedRed}>+1</button>
            </div>
        </div>
       );
}