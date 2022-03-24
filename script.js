const button = document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const listItem = document.getElementsByTagName('li');
const linhaFrase = document.getElementsByClassName('.completed');

function addFrase(){
    let texto = input.value;
    let ciarLi = document.createElement("li");
    ciarLi.innerText = texto;
    list.appendChild(ciarLi);
    input.value = '';
    listItem.addEventListener('click', colorGrey);
 //   listItem.addEventListener("dbclick", checkCompleted);
}
button.addEventListener('click', addFrase);

function colorGrey(event){
    event.target.style.backgroudColor = 'grey';
}

//function checkCompleted(event){
 //   let addClass = document.createElement("class");
 //   ciarLi.innerText = texto;
 //   list.appendChild(ciarLi);
 //   event.target.className('completed');
  //  event.target.style.text-decoration = 'line-through solid rgb(0,0,0)';
//}
//let addClasse = document.getElementsByClassName(".completed");
   // addClass.className.add("completed"); 
   // className.add(listItem);
    //console.log(listItem);

//function novoItemLista() { //texto digitado aparece na lista e desaparece do input.
  //  const fraseLista = JSON.parse(sessionStorage.getItem('frase'));   //itens criados permanecem na lista na medida em que novos são adicionados.
    //const listLength = fraseLista.lenght - 1;
  //  const fraseText = fraseLista[listLength];
  //  let frase = document.createElement('li')
    //frase.addEventListener("dbclick", marcado)
    //frase.addEventListener('click', colorList)
   // list.appendChild(frase)
    //list.value = '';
//}

//function addFrase (){
  //  if(sessionStorage.getItem('frase') === null){
 //       sessionStorage.setItem('frase', JSON.stringify([]));
  //  }
 //   const newList = JSON.parse(sessionStorage.getItem('frase'));
  //  const fraseText= input.value;
  //  newList.push(frase);
  //  sessionStorage.setItem('frase', JSON.stringify(newList));
  //  novoItemLista();
 //  }

 //button.addEventListener('click', addFrase);

           //

    //listItem.addEventListener('click', colorList);
    //function colorList(event){
     //   event.target.style.backgroudColor = 'gray';

        //for (let i = 0; i < fraseText.lenght; )
       // };

        // 

    //listItem.addEventListener("dbclick", marcado);
    //function marcado(event){
       // event.target.classList.toggle('completed');
    //}

