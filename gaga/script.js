const n = prompt()

function fib(n){
    if (n === 0){
        return 0
    }
    if (n === 1){
        return n
    }
    let a = 0
    let b = 1
    let result = 0
    for( i = 2; i <= n; i +=1){
        result = a + b
        a = b
        b = result
    }
    return result
}
console.log(`fib(${n}) = ${fib(n)}`)