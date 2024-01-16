// let todo = [];

// let req = prompt("Enter you request");

// while (true) {
//   if (req === "quit") {
//     console.log("quitting the app");
//     break;
//   }

//   if (req === "list") {
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//   } else if (req === "add") {
//     let task = prompt("enter your todo");
//     todo.push(task);
//     console.log("Task added");
//   } else if (req === "delete") {
//     let index = prompt("enter your task index");
//     index = parseInt(index);
//     todo.splice(index, 1);
//     console.log("Task deleted");
//   }
//   req = prompt("enter you request");
// }



     let btn = document.querySelector(".btn");
     let p = document.querySelector("p");
     let input = document.querySelector("input");

     btn.addEventListener("click" , function(){
      if(input.value === ''){
        alert(" oops!! ,You must write any task !")
      }else{
        let items = document.createElement("p");
        items.innerHTML = input.value;
        //  p.innerHTML = items.innerHTML

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("del");
        // let text = document.querySelector(".text")
        p.appendChild(items);
        items.appendChild(delBtn);


      }
      input.value = "";

     });
     p.addEventListener("click" , function(event){
       if( event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log( "delete");
       };
     });


    //   all button delete when we cick any button
    //  let delBtns =  document.querySelectorAll("button");
    //  for( delBtn of delBtns){
    //   delBtn.addEventListener("click" , function(){
    //     let par = this.parentElement;
   
    //     console.log("Element delete");
    //     par.remove();
    //   })
    //  }
