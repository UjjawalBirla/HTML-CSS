// Input box aur saare buttons ko select karein
const inputBox = document.querySelector('.typing');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let btnText = this.innerText;

        if (btnText === 'AC') {
            inputBox.value = '';
        } 
        else if (btnText === 'DEL') {
            inputBox.value = inputBox.value.slice(0, -1);
        } 
        else if (btnText === '=') {
            try {
                inputBox.value = eval(inputBox.value);
            } catch (error) {
                inputBox.value = 'Error';
            }
        } 
        else {
            inputBox.value += btnText;
        }

        this.classList.add('active');
        
        setTimeout(() => {
            this.classList.remove('active');
        }, 150);
    });
});