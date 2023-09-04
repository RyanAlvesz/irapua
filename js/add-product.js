'use strict'

const less = document.getElementById('less')
const more = document.getElementById('more')

function add(){
    const number = document.getElementById('number').value

    if (number < 13){
        const newNumber = number - (-1)
        document.getElementById('number').value = newNumber
    }
}

function remove(){
    const number = document.getElementById('number').value
    if(number > 0){
        const novo = number - 1
        document.getElementById('number').value = novo
    }
}

more.addEventListener('click', add)
less.addEventListener('click', remove)
