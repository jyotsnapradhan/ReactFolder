import Product from "./Product";
function ProductTab(){
    // let options=[<li>"hi-tech"</li>,<li>"Durable"</li>,<li>"fast"</li>];
    let styles={
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      alignItem:"center",
  }

    return (
        <div style={styles}>
          
      {/* <Product title="phone" description="my phone is nice" price={1000} features={options}/>
      <Product title="laptop" description="my laptop is nice" price={2000}/>
      <Product title="television" description="my television is nice" price={3000}/> */}

      <Product title="Logitech Master Tech Mouse" idx={0}/>
      <Product title="Apple Pencil 2nd gen Apple" idx={1}/>
      <Product title="Zebronics Zeb-Transformer" idx={2}/>
      <Product title="Portonics Mouse Transformer" idx={3}/>
        </div>
    )
}
export default ProductTab;