let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(e =>{
    e.addEventListener('click', (b)=>{
        // console.log(string)
        if(b.target.innerText == '='){
            string = String(Math.round(eval(string)*10000)/10000)
            inputBox.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})