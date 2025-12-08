// const n = prompt()

// function fib(n){
//     if (n === 0){
//         return 0
//     }
//     if (n === 1){
//         return n
//     }
//     let a = 0
//     let b = 1
//     let result = 0
//     for( i = 2; i <= n; i +=1){
//         result = a + b
//         a = b
//         b = result
//     }
//     return result
// }
// console.log(`fib(${n}) = ${fib(n)}`)




const isVip = (purchase) => purchase > 20;

const total = 1500

function getDiscount(purchase, total) {
    
    if (isVip(purchase) && total > 1000) {
        return total * 0.1;
    } 

    return 0;
}

console.log(getDiscount(21, 1500)); 
console.log(getDiscount(21, 900)); 
console.log(getDiscount(15, 1200));  

const discount = getDiscount(21, 1500); 
function getTotalPrice(discount, total) {
    let totalPrice = total - discount
    return totalPrice
}

console.log(getTotalPrice(discount, total)) 

const formatPrice = (name, price) => {
    return (`${name}, стоимость заказа: ${price}₽`)
}

const getUserData = () => {
    let name = prompt('Ваше имя: ')
    let purchase = +prompt('Количество покупок: ')
    return {name, purchase}
}

function initDiscountCalculator () {

    let currentTotal = 1500

    const userData = getUserData()
    const discount = getDiscount(userData.purchase, currentTotal)
    const total = getTotalPrice(discount, currentTotal)
    const result = formatPrice(userData.name, total)

  return result
}

const resultPrice = initDiscountCalculator()

console.log(resultPrice)
