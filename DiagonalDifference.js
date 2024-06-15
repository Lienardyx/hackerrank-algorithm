function diagonalDifference(arr) {
    // Write your code here
    let diagonal1 = 0;
    let diagonal2 = 0;

    for(let i = 0; i < arr.length; i++){
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][arr.length - 1 - i];
    }

    return Math.abs(diagonal1 - diagonal2);
}

const arr = [
    [11, 2, 4],
[4,5,6],
[10,8,-12],
]

const result = diagonalDifference(arr);
console.log(result);