const button = document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const listItem = document.getElementsByTagName('li');
const linhaFrase = document.getElementsByClassName('.completed');
const apagarTudo = document.getElementById("apaga-tudo");
const removeCompleted= document.getElementById("remover-finalizados");
const salvarList = document.getElementById("salvar-tarefas");
const moveUp = document.getElementById("mover-cima");
const moveDown = document.getElementById("mover-baixo");
const moveSelected = document.getElementById("remover-selecionado");

button.addEventListener('click', function(){
  let texto = input.value;
  let ciarLi = document.createElement("li");
  ciarLi.innerText = texto;
  list.appendChild(ciarLi);
  input.value = '';
});

list.addEventListener('click', function(event){
  let alvo = document.querySelector('.colorGrey');
  if (alvo === null){
    event.target.classList.add("colorGrey");
  }else {
    alvo.classList.remove('colorGrey');
    event.target.classList.add('colorGrey');
  }
});
list.addEventListener('dblclick', function(event){
  event.target.classList.toggle("completed");
});

apagarTudo.addEventListener('click', function (){
  let lista = document.getElementsByTagName("li");
  for (let i = lista.length - 1; i >= 0; i--){
  list.removeChild(lista[i]);
  }
});

removeCompleted.addEventListener("click", function (){
  let completedList = document.getElementsByClassName('completed');
  for (let i = completedList.length -1; i >= 0; i--){
    list.removeChild(completedList[i]);
  }
});

salvarList.addEventListener('click', function(){
    localStorage.setItem('listElement',JSON.stringify(list.innerHTML));
});

window.onload = function(){
 let salveList =JSON.parse(localStorage.getItem('listElement'));
 list.innerHTML = salveList;
};

moveSelected.addEventListener('click', function(){
  let lista = document.getElementsByTagName("li");
  for (let i = lista.length - 1; i >= 0 ; i--){
    list.removeChild(lista.classList("colorGrey"));
  }
});  