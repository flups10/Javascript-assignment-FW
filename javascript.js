form = document.getElementById('register-form');
info = document.querySelector('.table-warning');

form.addEventListener('submit', onSubmit);

const myArray = ['What', 'on', 'Earth', 'is', 'happening', '?']

function onSubmit(e){
    e.preventDefault();
    
    text = document.getElementById('text-area-id').value;
    info.lastElementChild.innerText = text

    
    // This didn't work :\, Not sure why
    // for (i = 0; i < myArray.length; i++){
    //     setTimeout(() => console.log(myArray[i], console.log(myArray)) ,i * 1000);
    // }

    
    i = 0;
    function myLoop(){
        setTimeout(function(){
            info.firstElementChild.innerText = myArray[i]
            i++
            if (i < myArray.length){
                myLoop()
            }
        }, 1000)
    }
    myLoop()
}
