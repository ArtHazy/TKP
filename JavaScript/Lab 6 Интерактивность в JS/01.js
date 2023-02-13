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

var test = new Stack()
test.push(10)
document.getElementById("stackView").innerHTML = test.arr

function popStack() {
    test.pop()
    document.getElementById("stackView").innerHTML = test.arr
}
function pushStack() {
    let data = document.getElementById("to_push").value
    test.push(data)
    document.getElementById("stackView").innerHTML = test.arr
}






