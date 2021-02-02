mergedSortedArrays([0, 3, 4, 31], [4, 6, 30]);
//[0, 3, 4, 4, 6, 30, 31]

//SOLUTION 1: 
function mergedSortedArrays(array1, array2) {
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        /*
        0  4
        3  4
        4  4
        4  6
        31  6
        31 30
        31 undefined
        */
        if (!array2Item || array1Item < array2Item) {
            //Q. Why do we need !array2Item? array2's last item is undefined --> !array2Item becomes !undefined and is truthy so we can add the last item onto the mergedArray
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }


    return mergedArray;
}