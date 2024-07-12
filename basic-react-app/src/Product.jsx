import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    
    let oldPrice=['200','300','400','500'];
    let newPrice=['300','400','500','600'];
    let description=[['800 DP','5 programmable buttons'],['800 DP','5 programmable buttons'],['800 DP','5 programmable buttons'],['800 DP','5 programmable buttons']];
    return(
        // <div className="Product" style={styles}> 
        //     <h1>This is my Product {title}</h1>
        //     <p>This is my product {description}</p>
        //     <p>Price is {price}</p>
        //     <p>Feature : {features}</p>
        // </div>

        <div className="Product">
         <h4>{title}</h4>
         <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
         <Price oldPrice={oldPrice[idx]}newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;