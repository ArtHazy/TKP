class Stack {
    constructor (length = 5) {
        this.arr = Array(length)
        this.length = length
        this.pointer = 0
    }
    push(value){
        if (this.pointer<this.length)
        {
            this.arr[this.pointer] = value
            this.pointer++
        } 
    }
    pop(){
        if (this.pointer>=0) {
            this.arr[this.pointer-1] = undefined
            this.pointer--
        }
    }
}

var retrievedStack = JSON.parse(localStorage.getItem("stackKey"))

if (retrievedStack == null) {
    alert("please, create new stack")
    create()
}

function create() {
    var stack = new Stack()
    saveStack(stack,"stackKey")
}

function pushs() {
    var stack = retrieveStack("stackKey")

    var value = document.getElementById("push").value
    stack.push(value)
    saveStack(stack,"stackKey")
}

function pops() {
    var stack = retrieveStack("stackKey")
    stack.pop()
    saveStack(stack,"stackKey")
}

function retrieveStack(stackKey) {
    var retrievedStack = JSON.parse(localStorage.getItem(stackKey))
    var stack = new Stack(retrievedStack.length)
    stack.arr=retrievedStack.arr
    stack.pointer=retrievedStack.pointer
    return stack
}
function saveStack(stack,stackKey) {
    localStorage.setItem(stackKey, JSON.stringify(stack) )
}