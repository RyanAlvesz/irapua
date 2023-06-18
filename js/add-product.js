const less = document.getElementById('less');
const more = document.getElementById('more');

function add(){
    var number = document.getElementById("number").value;
    if (number < 13){
        var novo = number - (-1);
        document.getElementById("number").value = novo;
    }
}

function remove(){
    var number = document.getElementById("number").value;
    if(number > 0){
        var novo = number - 1;
        document.getElementById("number").value = novo;
    }
}

more.addEventListener('click', add);
less.addEventListener('click', remove);
