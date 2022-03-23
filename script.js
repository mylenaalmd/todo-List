const button = document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const list = document.getElementById("lista-tarefas");
const listItem = document.getElementsByTagName('li');

function novoItemLista() {
    const fraseLista = JSON.parse(sessionStorage.getItem('frase'));
    const listLength = fraseLista.lenght - 1;
    const fraseText = fraseLista[listLength];
    const frase = document.createElement('li');
    frase.innerText = fraseText;
    list.appendChild(frase);
}
function addFrase (){
    if(sessionStorage.getItem('frase') === null){
        sessionStorage.setItem('frase', JSON.stringify([]));
    }
    const oldList = JSON.parse(sessionStorage.getItem('frase'));
    const fraseText = input.value;
    oldList.push(fraseText);
    sessionStorage.setItem('frase', JSON.stringify(oldList));
    novoItemLista();
    }

    button.addEventListener('click', addFrase);


   // function colorList(){
   //     document.getElementsByName("li").style.backgroudcolor="cinza rgb(128,128,128)";
    //}
    listItem.addEventListener('click', function(event) {
        event.target.style.backgroudcolor = 'rgb(128,128,128)';
        });