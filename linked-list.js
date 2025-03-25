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
        while(currentNode !== null) {
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

    pop() {
        if(this.head === null){
            console.log("nothing to remove");
            return this.head;
        } 

        if(this.head.nextNode === null) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        //while the next two don't equal null, will stop when the next one is the last one, THEN
        //you can make the next one equal null
        while(currentNode.nextNode !== null  && currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        
        currentNode.nextNode = null;
    }

    contains(input) {
        if(this.head.value == null) {
            return false;
        }

        let currentNode = this.head;
        //while the next two don't equal null, will stop when the next one is the last one, THEN
        //you can make the next one equal null
        while(currentNode !== null) {
            if (currentNode.value == input) {
                console.log("true");
                return true;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        
        console.log("false");
        return false;

    }
}

let defaultList = new LinkedList();

defaultList.prepend("monkey");
defaultList.append("dog");
defaultList.append("cat");
defaultList.at(1);
defaultList.size();
defaultList.contains("cat");

console.log(defaultList);