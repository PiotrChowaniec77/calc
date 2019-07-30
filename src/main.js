var displayCalc = document.querySelector('#result');
var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        displayCalc.innerText += this.value
        console.log(this.value)
        if (this.value == ('ac')) {
            displayCalc.innerText = '';
        } else if (this.value == ('=')) {
            console.log('suma')
        }
    })
}