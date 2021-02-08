const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Time Complexity: O(n^2) - nested for loop
//Space Complexity: O(1) - not creating any new memory
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        //set current index as minimum number
        let minimum = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minimum]) {
                //update minimum number if current is lower than what we had previously
                minimum = j;
            }
        }
        array[i] = array[minimum];
        array[minimum] = temp;
    }
    return array;
}
selectionSort(numbers); //[0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]