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

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}

const myHashTable = new HashTable(50); //give hash table memory size of 50
myHashTable._hash('grapes'); //23 - memory space is from 0-50
myHashTable.set('grapes', 1000);
myHashTable.get('grapes');