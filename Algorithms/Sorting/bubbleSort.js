const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Time Complexity: O(n^2) - nested for loop
//Space Complexity: O(1) - not creating any new memory
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j+1]) {//if 99 > 44, swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
bubbleSort(numbers); //[0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]