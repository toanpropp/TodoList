import { List } from "./Todo.js";
import { DoingList } from "./oder.js";

let list = new List();
// document.querySelector("#addItem").onclick 
    window.addItem = ()=>{
    let InputTask = document.querySelector('#newTask').value;
        let newTodo =new DoingList();
        newTodo.names = InputTask;
        list.addTodo(newTodo);
        list.setTodoList();
    }
    window.updateItem = function(names){
        console.log(names);
        list.checked(names);
        list.renderTodoList('#todo');
        list.setTodoList();
    }
    window.removeItem = (names) =>{
        list.delete(names);
        list.renderTodoList('#todo');
        list.setTodoList();
    }
    //show Only ToDoList
    document.querySelector("#one").onclick = () => {
        document.querySelector("#completed").style.display = "none";
    };
    
    //show all
    document.querySelector("#all").onclick = () => {
        document.querySelector("#completed").style.display = "block";
    };
    document.querySelector("#two").onclick = () => {
        
    }
    document.querySelector("#three").onclick = () => {
        
    }
    document.querySelector("#all").onclick = () => {
        
    }
    

    window.onload = ()=>{
        list.getTodoList();
        list.renderTodoList("#todo");
}