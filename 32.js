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
        let startSum = 0;
        for (let end = start; end < arr.length; end++) {
            startSum += arr[end];
            maxSum = Math.max(maxSum, startSum);
        }

    }
   return maxSum;
}
alert( getMaxSubSum([1, 2, 3]) );