function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }

    return sum;
}

const ar = [1, 2, 3, 4, 10, 11]
const result = simpleArraySum(ar);

console.log(result);