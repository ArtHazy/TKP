class List {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(data) {
        var node = {data, prev:null, next:null} // new node
        if (!this.head) { this.head = node; this.tail = node } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
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


    pop(ind) {
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
        if (node.next && node.prev) {
            node.prev.next = node.next
            node.next.prev = node.prev
        } else {
            if (!node.next) {
                node.prev.next = null
                this.tail = node.prev
            }
            if (!node.prev) {
                node.next.prev = null
                this.head = node.next
            }
        }

        
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

    var input = document.getElementById("input").value
    list.push(input)
    saveList(list,"listKey")
}

function pops() {
    var list = retrieveList("listKey")
    var input = document.getElementById("input").value
    var index = list.find(input)

    if (index!=-1){ // if innput data was found
        list.pop(index)
    } else {
        alert("data was not found")
    }
    saveList(list,"listKey")
}

function searchs() {
    var list = retrieveList("listKey")
    var input = document.getElementById("input").value
    var result_ind = list.find(input)
    if (result_ind==-1){ alert("data was not found")} else {
        alert("data was found at index " + result_ind)
    }
}

function retrieveList(listKey) {
    
    var retrievedList = JSON.parse(localStorage.getItem(listKey))
    var list = new List(retrievedList.length)
    
    for (var i=0; i<retrievedList.length; i++){
        list.push(retrievedList[i])
    }

    return list
}

function saveList(list,listKey) {
    var output = new Array()
    var buf = list.head
    var i = 0
    while (buf!=null){
        output[i] = buf.data
        buf = buf.next
        i++
    }

    localStorage.setItem(listKey, JSON.stringify(output) )
}