function addTo80(n) {
 return n + 80;
}
addTo80(5);
addTo80(5);
addTo80(5); //Ran the same operation 3x even though it's the same calculation

function memoizedAddTo80() {
    let cache = {};

    return function(n) {
        //If n exists in cache --> way to check if a property exists in an object
        if (n in cache) { //can also do 'cache.n'
            return cache[n];
        //If n does not exist in the cache,
        } else {
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80();

memoizedAddTo80(5); 
//Goes to else statement and adds n to cache --> cache = { 5: 85 }

memoizedAddTo80(5); //O(1) - lookup
//Goes to if statement and n already exists so lookup in the cache object