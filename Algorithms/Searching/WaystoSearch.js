const food = ['banana', 'apple', 'celery', 'bread', 'tomato'];

//All of these searches are linear searches - O(n)
//Worst case: we're going through the entire list to find 'celery'
food.indexOf('celery'); //2

food.findIndex('celery'); //1 = true

food.find(item => item === 'celery'); //'celery'

food.includes('celery'); //true