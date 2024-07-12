import './App.css';
import Counter from './Counter';
import LikeButton from './LikeButton';
import LudoBoard from './LudoBoard';
import ToDo from './ToDo';
import LootteryGame from './LotteryGame';
//import TicketNum from './TicketNum';
import Ticket from './Ticket';

function App() {

  return (
    <div>
      {/* <h1>States in React</h1>
      <Counter/>
      <LikeButton/> */}
      {/* <LudoBoard/> */}
    {/* <ToDo/> */}
      
     {/* <TicketNum num={5}/>
     <TicketNum num={4}/>
     <TicketNum num={2}/> */}
     <LootteryGame/>
     <Ticket ticket={[0,1,4]}/>
     <Ticket ticket={[0,1,4,5,8,7,9]}/>
    </div>
  )
}

export default App;
