console.log('Hello World!')

const numButtons = document.querySelectorAll('.button')
console.log('array of buttons', numButtons)

const display = document.getElementById('display')
console.log(display, display)

for (let button of numButtons) {
  button.addEventListener('click', (Event) => {
    if (Event.target.id !== 'eval' &&  display.innerText === '0') {
        display.innerText = Event.target.id
    }
        else if (Event.target.id !== 'eval'){
            display.innerText += Event.target.id
            console.log('click', Event.target.id)    
    }
    

    if (Event.target.id === 'clear') {
      display.innerText = '0'
      console.log('Clear!')
    }
    if (Event.target.id === 'eval') {
      let result = eval(display.innerText)
      display.innerText = result
      console.log(result)
      console.log('Eval Clicked!')
    }
  })
}
