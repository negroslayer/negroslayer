let display = document.getElementById('displays');

function append(value){
    display.value += value;
}

function calculate(){
    display.value = eval(display.value);
}

function del_all(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}