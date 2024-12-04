let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(e => {
    ResultShowingFlag = 0
    e.addEventListener('click', (b) => {
        // console.log(string)

        if (b.target.innerText == '=') {
            string = String(Math.round(eval(string) * 10000) / 10000)
            ResultShowingFlag = 1
            inputBox.value = string;
        }
        else if (b.target.innerText == 'AC') {
            string = ''
            inputBox.value = string
        }
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1)
            inputBox.value = string
        }
        else {
            if (ResultShowingFlag == 0) {
                string += b.target.innerText
                inputBox.value = string
            }
            else {
                string = ''
                string += b.target.innerText
                inputBox.value = string
                ResultShowingFlag = 0
            }
        }
    })
})