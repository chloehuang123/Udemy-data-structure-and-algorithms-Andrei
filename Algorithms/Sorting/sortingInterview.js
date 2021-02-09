//WHAT SORTING ALGORITHM WOULD YOU USE?

//1. Sort 10 schools around your house by distance:
Insertion sort
- Why? It's fast on small sorts(input is 10), it's easy to code and has space complexity of O(1), 10 schools could be presorted or nearly sorted

//2. eBay sorts listings by the current Bid amount:
Radix or counting sort
- Why? Bids are a fixed length of integers and within a certain range

//3. Sport scores on ESPN:
Quick sort
- Why? Most efficient, merge sort may take up too much memory

//4. Massive database (can't fit all into memory) needs to sort through past year's user data
Merge sort
- Why? Not sorting in memory since data is so big - and because data is so big, don't use quick sort since the data would be n^2
- Want to ensure that time complexity will be O(n log(n))

//5. Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion sort
- Why? Assuming most of the previous data is already sorted and we're just adding 2 new reviews to this data
- Insertion sort for preordered lists work better than any other type of sorting

//6. Temperature Records for the past 50 years in Canada
Radix/counting sort (if temperatures do not have decimals and are within a small range)
Quick sort
- Why? Temperatures have decimal places 
- Do in memory sorting and save space complexity

//7. Large user name database needs to be sorted. Data is very random.
Merge sort (if memory isn't too expensive on the machine and we have enough memory)
Quick sort (if I'm not worried about worse case of O(n^2) and that the user database is not that large and save on memory space)

//8. You want to teach sorting for the first time
Bubble sort/Selection sort