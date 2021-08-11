const screen = document.querySelector('#screen');
const button = document.querySelectorAll('button');
let screenValue = '';
for(num of button)  {
    num.addEventListener('click', (r) => {
       showButton = r.target.innerText;
       console.log('button is ', showButton);
       if(showButton == 'X') {
             showButton = '*';
             screenValue += showButton;
             screen.value = screenValue;
       }
       
       else if(showButton == 'C') {
           screenValue = '';
           screen.value = screenValue;
}
       
       else if(showButton == '=') {
           screen.value = eval(screenValue);
    }

    else {
        screenValue += showButton;
        screen.value = screenValue;
    }
} ) 
}