function event1(){
    var input = document.getElementById("nome")
    var lab = document.getElementById("label1")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "6px"
    }
}

function desevent1(){
    var input = document.getElementById("nome")
    var lab = document.getElementById("label1")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
    }
}

function event2(){
    var input = document.getElementById("email")
    var lab = document.getElementById("label2")

    if(input.value.length >= 1){
        lab.style.display = "block"
        input.style.marginTop = "6px"
    }
}

function desevent2(){
    var input = document.getElementById("email")
    var lab = document.getElementById("label2")

    if(input.value.length == 0){
        lab.style.display = "none"
        input.style.marginTop = "0px"
    }
}
