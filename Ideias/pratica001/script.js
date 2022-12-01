var fnum = document.querySelector('input#fnum')
var caixanum = document.querySelector('select#caixanum')
var vectorn = []
var soma = 0

function intervalo (n) {
    if (Number(n) < 1 || Number(n) > 100) {
        return false
    } else {
        return true
    }
}

function repetido (n,v) {
    if (v.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
    /*var cont = 0
    for (var pos in v) {
        if (Number(n) == vectorn [pos]) {
            cont ++
        } 
    }

    if (cont != 0) {
        return true
    } else {
        return false
    }*/
}

function adicionar () {
    var num = Number(fnum.value)
    if (intervalo (num) == false) {
        alert('Digite um valor entre 1 e 100')
    } else if (repetido (num, vectorn) == true) {
        alert(`Valor ${num} já adicionado. Escolha outro valor`)
    } else {
        vectorn.push(num)
        var seleção = document.createElement('option')
        seleção.text = (`Valor ${num} adicionado`)
        caixanum.appendChild(seleção)
        soma += num
    }
}

function analisar () {
    alert(soma)
}