class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    remove(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return lastItem;
    }

    shiftItems(index) {
        //start at the index where we want to delete from
        for (let i = index; i < this.length - 1; i++) {
            //take each item in the array and add 1 to its index number --> shift to the left by 1
            this.data[i] == this.data[i + 1];
        }
        delete this.data[this.length - 1];
        //Q. Why do we need this? indices are shifted by the # of items remains the same --> 2nd last and last item are the same
        this.length--;
    }
}

const newArray = new MyArray();
newArray; //MyArray {length: 0, data: {} }
newArray.push('hi'); //MyArray {length: 1, data: {0: 'hi' } }
newArray.push('my'); //MyArray {length: 2, data: {0: 'hi', 1: 'my'  } }
newArray.pop();
MyArray.remove(0); ////MyArray {length: 1, data: {0: 'my' } }