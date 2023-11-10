function countdownTimeStart(){

    var countDownDate = new Date("Sep 25, 2025 00:00:00").getTime();
    
    var x = setInterval(function() {
    
        var now = new Date().getTime();
        
        var distance = countDownDate - now;
        
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds
        
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
}

countdownTimeStart()

const popup = document.getElementById('pop-up')

document.addEventListener('mouseleave', ()=>{
    popup.classList.add('active')
})

document.addEventListener('click', ()=>{
    popup.classList.remove('active')
})

let popupMini = document.querySelectorAll('#popup-mini')
let k
let f = false
let t
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getModal(){
    let r = getRandomInt(3)
    if(r == 0) {
        popupMini[0].classList.add('active')
        f = true
        k = 0
    }
    if(r == 1) {
        popupMini[1].classList.add('active')
        f = true
        k = 1
    }
    if(r == 2) {
        popupMini[2].classList.add('active')
        f = true
        k = 2
    }
}

function closeModal(){
    if(k){
        popupMini[k].classList.remove('active')
        f = false
        clearInterval(t);
        getInterval()
    }
}

function getInterval(){
    t = setInterval(function(){
        if(!f){
            getModal()
        }
        else if (f){
            popupMini[k].classList.remove('active')
            f = false
        }
    }, 10000)
}

getInterval()

