const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    //Split array into right and left
    const length = array.length;
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    console.log('left:', left);
    console.log('right:', right);
    /*
    //Split array in half - down the middle
    left: [99, 44, 6, 2, 1]
    right: [5, 63, 87, 283, 4, 0]

    left: [99, 44]
    right: [6, 2, 1]

    left: [99]
    right: [44]

    left: [6]
    right: [2, 1]

    left: [2]
    right: [1]

    left: [5, 63, 87]
    right: [283, 4, 0]

    left: [5]
    right: [63, 87]

    left: [63]
    right: [87]

    left: [283]
    right: [4, 0]

    left: [4]
    right: [0]
     */
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    //while the leftIndex < length of the left array && while the rightIndex < length of the right array
    //Make sure we still have items in our array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            //add the smaller number into the result []
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    console.log(left, right);
    /*
    [99] [44]
    [2] [1]
    [6] [1, 2]
    [44, 99] [1, 2, 6]
    [63] [87]
    [5] [63, 87]
    [4] [0]
    [283] [0, 4]
    [5, 63, 87] [0, 4, 283]
    [1, 2, 6, 44, 99] [0, 4, 5, 63, 87, 283]
    [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
    */
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const answer = mergeSort(numbers);
console.log(answer);