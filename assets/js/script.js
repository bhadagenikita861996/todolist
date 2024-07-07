let taskList = [];
let inputTodo = document.querySelector('#inputTodo');
let inputdate = document.querySelector('#date');

function addTodo(){
    let value = inputTodo.value;
    let dvalue = inputdate.value;
    // console.log(value);
    // taskList.push(value);
    taskList.unshift({todo:value,datelist:dvalue});
    // console.log(taskList);
    inputTodo.value="";
    displayList();
}

function displayList(){
    let listBox= document.querySelector('#listBox');
    let newList ='';
    for (let i=0 ; i < taskList.length ; i++ ){
        newList +=  `
          <li class="listItem">
             <span>${taskList[i].todo}</span>
             <span>${taskList[i].datelist}</span>
             <span class="del" onclick="taskList.splice(${i},1); displayList()"> &#x1F5D1;</span>
          </li>
        `
    }
    listBox.innerHTML = newList;
}