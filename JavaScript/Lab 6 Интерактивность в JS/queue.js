class Queue {
    constructor(length = 5) {
        this.arr = Array(length)
        this.length = length
        this.spacePtr = 0
        this.firstPtr = -1
    }
    push(value) {
        if (this.spacePtr!=this.firstPtr) {
            this.arr[this.spacePtr] = value
            this.spacePtr = ++this.spacePtr%this.length
        }
        this.firstPtr==-1? this.firstPtr = 0 : null
    }
    pop() {
        if (this.firstPtr!=this.spacePtr) {
            this.arr[this.firstPtr] = undefined
            this.firstPtr = ++this.firstPtr%this.length
        }
    }
}
var test = new Queue
document.getElementById("queueView").innerHTML = test.arr

function popQueue(){
    test.pop()
    document.getElementById("queueView").innerHTML = test.arr
}

function pushQueue() {
    let value = document.getElementById("to_push").value
    test.push(value)
    document.getElementById("queueView").innerHTML = test.arr
}