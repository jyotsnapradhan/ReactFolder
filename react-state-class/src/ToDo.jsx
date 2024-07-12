import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
export default function ToDo(){
    let [todos, setTodo]= useState([{task:'to do added',id:uuidv4(),isDone:false}]);// when clicked on add button add it will store the value in array format
    let [newTodo,setNewTodo]=useState('');// when added new values to the input field it will generate
    function todoAddBtn(){
        console.log("add button clicked");
        setTodo([...todos,{task:newTodo,id:uuidv4(),isDone:false}]);
        setNewTodo('');
    };
    function newToDoInput(event){
        setNewTodo(event.target.value);
        
    };

    function deleteTodo(id){
        setTodo(todos.filter((todoTobeDelted)=>todoTobeDelted.id!=id));

        console.log(id);
    }
// add function to make it all uppercase
    let uperCaseAll=()=>{
        setTodo((prevTodos)=>
            prevTodos.map((todo)=>{
            return {...todo,task:todo.task.toUpperCase()}
        }))
    }
    let uperCaseOne=(id)=>{
        setTodo((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id==id){
                    return {...todo,task:todo.task.toUpperCase()}
                }else{
                    return todo;   
                }
            
        }))
    }

    /**
     * Updates the todo list by marking a todo as completed if it is not already done.
     *
     * @param {string} id - The ID of the todo to mark as completed.
     * @param {boolean} isDone - The current completion status of the todo.
     */
    let crossTodo=(id,isDone)=>{
        // Update the todo list by marking the todo with the given ID as completed
        // if it is not already done.
        setTodo((prevCross)=>
            prevCross.map((todo)=>
                {
            // If the todo has the given ID and is not already done, mark it as done.
            if(todo.id==id && todo.isDone==false){
               return{...todo,task:todo.task,isDone:!isDone} // Mark the todo as done.
            }else{
               return{
                   ...todo // Return the todo unchanged.
               }
            }
       }))
        
    } // End of crossTodo function

    

    

    return(
        <div>
            <h3>To do List</h3>
            <label>Lists to be added:</label>
            <input type="text" onChange={newToDoInput} value={newTodo}></input>
            <button onClick={todoAddBtn}>Add</button>
            <hr></hr>
            <ul>
                {todos.map((todo)=>{
                    return (
                    <li key={todo.id}>
                        <span style={{textDecoration:todo.isDone?'line-through':'none'}}>{todo.task}</span>
                        &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        &nbsp;
                        <button onClick={()=>uperCaseOne(todo.id)}>Make it one uppercase</button>
                        &nbsp;
                        <button onClick={()=>crossTodo(todo.id,todo.isDone)}>Done</button>
                    </li>
                    
                    );
                    }
                    )
                }
            </ul>
            <button onClick={uperCaseAll}>Make it All uppercase</button>
        </div>
    );
}