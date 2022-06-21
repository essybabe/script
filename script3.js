const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedColor) => {
    return window.getComputedStyle(selectedColor).backgroundColor;

};

var color= getBGColor(red)

// console.log(color);

// red.addEventListener("mouseenter",  ()=> {
//     center.style.backgroundColor
// })

let changeElement =function (element, color) {
 return   element.addEventListener("mouseenter",  ()=> {
        center.style.background=color
    })
}

changeElement(red, getBGColor(red));
changeElement(cyan, getBGColor(cyan));
changeElement(violet, getBGColor(violet));
changeElement(orange, getBGColor(orange));
changeElement(pink, getBGColor(pink));