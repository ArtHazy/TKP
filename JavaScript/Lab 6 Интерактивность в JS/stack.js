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

var stack = new Stack()

document.getElementById("stackView").innerHTML = stack.arr

function popStack() {
    stack.pop()
    document.getElementById("stackView").innerHTML = stack.arr
    paper_main()
}
function pushStack() {
    let data = document.getElementById("to_push").value
    stack.push(data)
    document.getElementById("stackView").innerHTML = stack.arr
    paper_main()
}



