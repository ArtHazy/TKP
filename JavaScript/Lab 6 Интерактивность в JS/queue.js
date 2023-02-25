class Queue {
    constructor(length = 5) {
        this.arr = Array(length)
        this.length = length
        this.spacePtr = 0
        this.firstPtr = -1
    }
    push(value) {
        if (this.arr[this.spacePtr]==null) { // queue not full
            this.arr[this.spacePtr] = value
            this.spacePtr = ++this.spacePtr%this.length
        } else { // queue is full
            alert("Queue is full")
        }
        this.firstPtr==-1? this.firstPtr = 0 : null
    }
    pop() {
        if (this.arr[this.firstPtr]!=null) { // queue not empty
            this.arr[this.firstPtr] = null
            this.firstPtr = ++this.firstPtr%this.length
        } else { // queue is empty
            alert("Queue is empty")
        }
    }
}

var retrievedQueue = JSON.parse(localStorage.getItem("queueKey"))

if (retrievedQueue == null) {
    alert("please, create new queue")
    createQueue()
}

function createQueue() {
    var queue = new Queue()
    saveQueue(queue,"queueKey")
}

function deleteQueue(queueKey = "queueKey") {
    localStorage.removeItem(queueKey)
}

function pushs() {
    var queue = retrieveQueue("queueKey")

    var value = document.getElementById("push").value
    queue.push(value)
    saveQueue(queue,"queueKey")
}

function pops() {
    var queue = retrieveQueue("queueKey")
    queue.pop()
    saveQueue(queue,"queueKey")
}

function retrieveQueue(queueKey) {
    var retrievedQueue = JSON.parse(localStorage.getItem(queueKey))
    var queue = new Queue(retrievedQueue.length)
    queue.arr=retrievedQueue.arr
    queue.spacePtr=retrievedQueue.spacePtr
    queue.firstPtr=retrievedQueue.firstPtr
    return queue
}

function saveQueue(queue,queueKey) {
    localStorage.setItem(queueKey, JSON.stringify(queue) )
}