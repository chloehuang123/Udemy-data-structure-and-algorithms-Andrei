const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Time Complexity: O(n^2) - nested for loop
//Space Complexity: O(1) - not creating any new memory
function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            //find where the number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    //move the number to the correct spot
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
}
insertionSort(numbers); //[0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]