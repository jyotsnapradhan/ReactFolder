export default function Price({oldPrice,newPrice}){
    let oldPriceStyles={
        textDecoration: "line-through"
    }
    let newPriceStyles={
        fontWeight:"bold"
    }

    let styles={
        backgroundColor:"goldenrod",
        height:"75px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
     return(
        <div style={styles}>
            <span style={oldPriceStyles}>Old Price:{oldPrice}</span>
            <br></br>
            <span style={newPriceStyles}>New Price:{newPrice}</span>
        </div>
     );
}