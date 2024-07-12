function submitForm(event){
    event.preventDefault();
    console.log("Form has been submitted");
}


export default function Form(){
    return(
        <form onSubmit={submitForm}>
            <input placeholder="type something"/>
            <button>Submit!</button>
        </form>
    );
}