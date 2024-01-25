import "./style.css";


interface Todo {
  title: string;
  iSCompleeted: boolean;
  readonly id: string;
}

const todos: Array<Todo> = [];

const todoContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.querySelector("#todoInput") as HTMLInputElement;
console.log(todoInput.value)

const myForm = document.querySelector('#myform') as HTMLFormElement;


myForm.onsubmit = (e :SubmitEvent)=>{
  e.preventDefault();
  const todo: Todo = {
        title: todoInput.value,
        iSCompleeted: false,
        id: String(Math.random() * 1000),
      };
      todoInput.value='';
      todos.push(todo);
      renderTodo(todos)
}

const deleteBtn =(id:string)=>{
  const idx = todos.findIndex((item)=>item.id ===id);
  todos.splice(idx,1);
  renderTodo(todos)

}

const genrateTodoItem=(title: string, isCompleted:boolean , id: string)=>{
    const todo: HTMLDivElement = document.createElement('div')
    todo.className= "todo";

    // Creating a checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.className = "isCompleted"
    checkbox.checked = isCompleted;
    checkbox.onchange=()=>{
       para.className= checkbox.checked ? "textCut" :""
    }

    // Creating a paragraph tag
    const para :HTMLParagraphElement = document.createElement('p')
    para.textContent= title

    //Creating delete btn element 
    const btn:HTMLButtonElement = document.createElement('button')
    btn.innerText="X";
    btn.className="deleteBtn"
    btn.onclick=()=>{
      deleteBtn(id);
    }

    
    // Appending in its container
    todo.append(checkbox,para ,btn)
    todoContainer.append(todo)
}

const renderTodo = (todos:Todo[])=>{

  todoContainer.innerHTML ='';
  todos.forEach(item=>{
    genrateTodoItem(item.title , item.iSCompleeted, item.id);
  })
}



// myForm.onSubmit = (e: SubmitEvent) => {
  
//   e.preventDefault();

//   const todo: Todo = {
//     title: todoInput.value,
//     iSCompleeted: false,
//     id: String(Math.random() * 1000),
//   };
//   todos.push(todo);
//   console.log(todos);
// };
