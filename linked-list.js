class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        //if head is empty, add to list
        if(this.head === null){
            this.head = new Node(value);
        }

        //add to first one that is null
        let currentNode = this.head;

        //while the current node you are on doesn't have a null next to it, keep going
        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        //stopped on node with nothing next to it, add node to the next one
        currentNode.nextNode = new Node(value);
    }

    prepend(value) {
        if(this.head == null){
            this.head = new Node(value);
        } else if (this.head !== null) {
            //add node in front of head
            let currentNode = new Node(value);
            currentNode.nextNode = this.head;
            this.head = currentNode;
        }  
    }
}

let defaultList = new LinkedList();

defaultList.append("dog");
defaultList.append("cat");
defaultList.prepend("monkey");

console.log(defaultList);