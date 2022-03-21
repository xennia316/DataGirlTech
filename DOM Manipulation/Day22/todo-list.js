let forms = document.forms['todo'];
let todoParent = document.getElementById('todos');

function addTodo(){
    let text = forms['text'].value;

    let div = document.createElement('div');
    div.innerText = text;

    todoParent.appendChild(div);
}