const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("list-container");



function addTask(){
  if (inputField.value === '') {
    alert("Don't forget to add a task.");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    let span = document.creatElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
  
  inputField.value = "";
  saveInfo();
}
  
listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
      event.target.classlist.toggle("checked");
    } else if(event.target.name === "SPAN"){
      event.target.parentElement.remove();
      saveInfo();
    }
  }, false);

  function saveInfo(){
    localStorage.setItem("info", listContainer.innerHTML);
  }

  function showTask(){
    listContainer.innerHTML = localStorage.getItem("info");
  }
  showTask();
