function getMaxSubSum(arr) {
    while (arr[0] < 0) {
        arr.shift();
    }
    while (arr[arr.length - 1] < 0) {
        arr.pop();
    }
    if (!arr.length) return 0;

    let maxSum = arr[0];
    for (let start = 0; start < arr.length; start++) {
        for (let end = start; end <= arr.length; end++) {
            
            let newArr = arr.slice(start, end)
            let sum = 0;
            for (let numb of newArr) {
                sum += numb;
            }
            maxSum = Math.max(maxSum, sum);
        }

    }
   return maxSum;
}
alert( getMaxSubSum([-1, -2, -3]) );