import "./App.css"
//import Title from  "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

function Description(){
  return <p>Hi I'm the description</p>;
}

function App() {
return (
    <div>
      <h2>Blockbuster Deals Shop Now!!!!!</h2>
  <ProductTab/>
  <Button/>
  <Form/>
    </div>
    
  ) 
}
export default App;
