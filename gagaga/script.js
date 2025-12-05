// let book1 = "The secret";
// let book2 = "Думай медленно, решай быстро";
// let book3 = "Грокаем алгоритмы";

// const maFavBooks = [
//     "The secret",
//     "Думай медленно, решай быстро",
//     "Грокаем алгоритмы",
// ];

// console.log(book1);
// console.log(maFavBooks);

// const nums1 = [42];
// console.log(nums1);

// const nums2 = new Array(42);
// console.log(nums2)


// const nums1 = [42, "is", false];

// console.log(nums1[2])

// nums1[1] = "42 is everithing"

// console.log(nums1);

// nums1[3] = "42"

// console.log(nums1)


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

// console.log(phrases.length);
// console.log(phrases[0]);

// console.log(phrases[phrases.length - 1]);

// let rand = Math.random() * 10;
// console.log(rand)

// console.log(Math.floor(9.95));
// console.log(Math.ceil(9.95));
// console.log(Math.round(9.5));
// console.log(Math.max(10, 5, 42));
// console.log(Math.min(10, 5, 42));
// console.log(Math.abs(-42));
// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(121));

// console.log(Math.floor(Math.random() * 10))

const randomIndex = Math.floor(Math.random() * phrases.length);

console.log(phrases[randomIndex]);


const min = Math.min()
const max = Math.max()

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log (randomInteger(1, 5))