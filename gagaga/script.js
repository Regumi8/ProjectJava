const phrases = [
    "отправлю другу смешную гифку",
    "посмотрю скидки на авиасейлс",
    "разберусь, о чем поют реперы",
    "расставлю книги на полке по цветам",
    "посмотрю на смешных лягушек",
    "хочу инжир",
    "42",
    "123",
];

const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(arr[randomIndex]);
    return arr[randomIndex]
}

let randomElement = getRandomElement(phrases)

const btn1 = document.querySelector(".btn1")
console.log(btn1)
const image = document.querySelector(".image")
console.log(image)
const advice = document.querySelector(".advice")
console.log(advice)
const advice__paragraph = document.querySelector(".advice__paragraph")
console.log(advice__paragraph)

btn1.addEventListener("click", () => {
    console.log("dklsjhfsifdsf")
})





// let x = prompt("Введите число")
// let n = prompt("Введите степень")

// function pow(abc, bca) {
//     if(!abc || !bca) 
//         return "Нужно ввести число"
//     if(isNaN(abc) || isNaN(bca)) 
//         return "Нужно ввести число"
//     return abc**bca
// }

// console.log(pow(x, n))