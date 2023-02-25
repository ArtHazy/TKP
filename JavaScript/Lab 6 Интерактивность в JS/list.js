class List {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(data) {
        var node = {prev:null, data, next:null} // new node
        if (!this.head) { this.head = node; this.tail = node } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++
    }
    find(data) { // search index of first mention of data
        if (this.head!=null) {
            var node = this.head // visitor
            var ind = 0
            while (node!=this.tail && node.data!= data) {
                node = node.next
                ind++
            }
            if (node.data == data) { return ind }
            else { return -1 }
        }
        
    }
    pop(data) {
        const ind = this.find(data)
        //find node with data
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
    getAll() {
        var output = []
        var node = this.head // visitor
        while (node != null) {
            output.push(node.data)
            node = node.next
        }
        return output
    }
}

var retrievedList = JSON.parse(localStorage.getItem("listKey"))

if (retrievedList == null) {
    alert("please, create new list")
    createList()
}

function createList() {
    var list = new List()
    saveList(list,"listKey")
}

function deleteList(listKey = "listKey") {
    localStorage.removeItem(listKey)
}

function pushs() {
    var list = retrieveList("listKey")

    var value = document.getElementById("push").value
    list.push(value)
    saveList(list,"listKey")
}

function pops() {
    var list = retrieveList("listKey")
    list.pop()
    saveList(list,"listKey")
}

function retrieveList(listKey) {
    
    var retrievedList = JSON.parse(localStorage.getItem(listKey))
    var list = new List(retrievedList.length)
    
    list.head=retrievedList.head
    list.tail=retrievedList.tail
    list.length=retrievedList.length
    return list
}

function saveList(list,listKey) {
    localStorage.setItem(listKey, JSON.stringify(list) )
}