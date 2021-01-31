/*
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('Ahhhh!')
    }
}

user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream(); //O(1)
*/

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    //_ = private property that you should not be accessing outside of the class
    _hash(key) { //O(1)
        let hash = 0;
        for (let i = 0; i < key.length; i++) {//grab the length of 'grapes' (key)
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            //charCodeAt(): returns an integer between 0 & 65535 
            //this.data.length: ensures the size stays between 0-50 (memory space for hash table)
            console.log(hash); // 0 14 8 44 48 23
        }
        return hash;
    }

    set(key, value) { //O(1)
        //address = where we want to store info
        let address = this._hash(key); //store key & value in address space created by _hash function
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);
            console.log(this.data); //[<23 empty items>, [['grapes, 1000]], <26 empty items> ]
        }
        //ELSE? data already exists there (collision) - add onto that array
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) { //O(1)
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) { //if there is something there (length > 0)
            for (let i = 0; i < currentBucket.length; i++) { //loop bc we may have >1 item
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }

        }
        return undefined;
    }
}

const myHashTable = new HashTable(50); //give hash table memory size of 50
//myHashTable._hash('grapes'); //23 - memory space is from 0-50

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
/* Memory space of 2 example */
//[<1 empty item>, [ ['grapes, 1000], ['apples', 54] ] ]
myHashTable.get('grapes');