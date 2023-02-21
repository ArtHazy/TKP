class list {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        var node = {prev:null, value, next:null} // new node
        if (!this.head) { this.head = node; this.tail = node } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++
    }
    find(value) { // search index of first mention of value
        if (this.head!=null) {
            var node = this.head // visitor
            var ind = 0
            while (node!=this.tail && node.value!= value) {
                node = node.next
                ind++
            }
            if (node.value == value) { return ind }
            else { return -1 }
        }
        
    }
    pop(value) {
        const ind = this.find(value)
        //find node with value
        if (ind < this.length/2) {
            var node = this.head // visitor from front
            for (var i = 0; i!=ind; i++) {
                node = node.next
            }
        } 
        else {
            var node = this.tail // visitor from back
            for (var i = this.length-1; i!=ind; i--) {
                node = node.prev
            }
        }
        //
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    get() {
        var output = new Array
        var node = this.head // visitor
        while (node != null) {
            output.push(node.value)
            node = node.next
        }
        return output
    }
}


var test = new list
document.getElementById("listView").innerHTML = test.get()

function popInList() {
    let value = document.getElementById("inputValue").value
    test.pop(value)
    document.getElementById("listView").innerHTML = test.get()
}

function pushInList() {
    let value = document.getElementById("inputValue").value
    test.push(value)
    document.getElementById("listView").innerHTML = test.get()

}

function searchInList() {
    let value = document.getElementById("inputValue").value
    if (test.find(value)==-1) {
        alert("Value was found")
    } else {
        alert("Value wasn't found")
    }
}
