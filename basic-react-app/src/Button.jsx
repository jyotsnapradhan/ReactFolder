function printHello(){
    console.log("hello");
}

function printBye(){
    console.log("Bye");
}

function doubleClickEvent(){
    console.log("Hey you have double clicked the evenet");
}


export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!</button>
            <p onMouseOver={printBye}>hello Please click on me to see you off!</p>
            <button onDoubleClick={doubleClickEvent}>Hey you have double clicked the evenet-now check in console</button>
        </div>
    );
}