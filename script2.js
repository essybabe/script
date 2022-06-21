
let counter = document.querySelector('.counter')
let follower = document.querySelector('.followers')

let count =1

setInterval(() => {
    if (count<1000) {
        count++
        counter.innerText=count
    }
}, 3);
