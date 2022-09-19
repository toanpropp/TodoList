
import { DoingList } from "./oder.js";
export class List{
    arrTodo =[];// save database
    completedList =[];//newlist
    addTodo = (newTodo) =>{
        this.arrTodo.push(newTodo);
    }

    setTodoList(){
        localStorage.setItem('arrTodo', JSON.stringify(this.arrTodo));

    }
    getTodoList(){
        if(localStorage.getItem('arrTodo')){
            this.arrTodo = JSON.parse(localStorage.getItem('arrTodo'));
        }
    }
    renderTodoList = (selectorTbody) => {
        // let output = this.arrTodo.reduce((html,todo)=>{
        //     return html +=
        //     `
        //                  <li>${todo.names}
        //                     <div class="buttons">
        //                          <button class="fa fa-trash remove" onclick=""></button>
        //                          <button style="" : ""}" class="fa fa-check complete "  onclick="updateItem('${todo.names}')"></button>
        //                      </div>
        //                  </li>
        //     `
        // },``);
        // document.querySelector(selectorTbody).innerHTML = output;
        
        let nComplice= '';
        let completed='';
        
        const arrtodo = this.arrTodo.sort((next,now)=>{
            let Next= next.names;
            let Now = now.names;
            if (Next<Now){
                return -1;
            }
            return 1;

        });
         arrtodo.reduce((html,todo)=>{
            if(todo.check){
               return completed +=`
                <li>${todo.names}
                   <div class="buttons">
                        <button class="fa fa-trash remove" onclick="removeItem('${todo.names}')"></button>
                        <button style="" : ""}" class="fa fa-check complete "  onclick="updateItem('${todo.names}')"></button>
                    </div>
                </li>
                `
            }

             return nComplice +=`
            <li>${todo.names}
                   <div class="buttons">
                        <button class="fa fa-trash remove" onclick="removeItem('${todo.names}')"></button>
                        <button style="" : ""}" class="fa fa-check complete "  onclick="updateItem('${todo.names}')"></button>
                    </div>
                </li>
            `

        },``);
        document.querySelector('#completed').innerHTML=completed;
        document.querySelector(selectorTbody).innerHTML =nComplice;
    }
    checked(names){
        let i = this.arrTodo.find(List => List.names === names)
        i.check= true;
        
        return i;
    }

    delete(names){
        this.arrTodo = this.arrTodo.filter(List => List.names !== names);
    }

    // let AtoZ = (arr) =>{
    //     arr.sort((next , todo) =>{
    //         let nameTd = todo.name.toLocaleLowerCase();
    //         let nameN = next.name.toLocaleLowerCase();
    //         if(nameN<nameTd) {
    //             return -1;
    //         }
    //         return
    //     });
    // }
}