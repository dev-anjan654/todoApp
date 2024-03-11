//selecting html element
const todoTitle = document.getElementById("title");
const todoDescription = document.getElementById("description");
const todoList = document.querySelector(".to-do-list");

//todo list save function
const save = ()=>{
    if(todoTitle.value == ""){
        todoTitle.style.borderColor = `red`;
    }
    else{
      todoTitle.style.borderColor = `#a8a5a5`;
      //create html element for todo list
      let newElement1 = document.createElement("ul");
      let newElement2 = document.createElement("li");
      newElement1.innerHTML = `${todoTitle.value}`;
      newElement2.innerHTML = `${todoDescription.value} <i class="fa-solid fa-xmark"></i>`;
      todoList.appendChild(newElement1);
      newElement1.appendChild(newElement2);

      //for clear the title & description box
      todoTitle.value = "";
      todoDescription.value = "";

      //delete feature
      let crossMark = newElement2.querySelector(".fa-xmark");
      crossMark.addEventListener("click",()=>{
        newElement1.remove();
    })  
    }
    
}
