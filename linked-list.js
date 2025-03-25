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

    size() {
        let listSize = 0;
        
        let currentNode = this.head;

        //while there IS a next node, add to list size, then move on to next one
        while(currentNode.nextNode !== null) {
            listSize++;
            currentNode = currentNode.nextNode;
        }

        console.log(listSize);
        return listSize;
    }

    returnHead() {
        console.log(this.head);
        return this.head;
    }

    returnTail() {
        if(this.head === null){
            console.log(this.head);
            return this.head;
        }

        let currentNode = this.head;

        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        } 
        console.log(currentNode);
        return currentNode;
    }

    at(index) {
        let currentNode = this.head;

        for(let i=0; i < index; i++) {
            if(currentNode.nextNode === null) {
                return console.log("no node here");
            } else if (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
        }
        console.log(currentNode);
        return currentNode;
    }
}

let defaultList = new LinkedList();

defaultList.prepend("monkey");
defaultList.append("dog");
defaultList.append("cat");
defaultList.size();
defaultList.at(1);

console.log(defaultList);