import { useState } from "react";
import { generateRandom, sum } from "./helper"; 
import Ticket from "./Ticket";
export default  function LotteryGame({n,winningSum}) {

    let [ticket,setTicket]=useState(generateRandom(n));
    let isWinning = sum(ticket) === winningSum;
    
    function lotteryBtn(){
      // const ticket = generateRandom(3);
      // console.log(`ticket : ${ticket}`);
        setTicket(ticket(n));
  }
    


    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket/>
             
            {/* <p>Lottery Ticket=<span>{ticket[0]}</span><span>{ticket[1]}</span><span>{ticket[2]}</span></p> */}

            <button onClick={lotteryBtn}>Get new Ticket</button>
            <p>{isWinning ? 'You have a winning ticket! Congratulations!' : 'You do not have a winning ticket'}</p>
        </div>
    )
}