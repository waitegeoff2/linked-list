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

        return listSize;
    }

    returnHead() {
        return this.head;
    }

    returnTail() {
        if(this.head === null){
            return this.head;
        }

        let currentNode = this.head;

        while(currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        } 
        return currentNode;
    }

    at(index) {
        let currentNode = this.head;

        for(let i=0; i < index; i++) {
            if(currentNode.nextNode === null) {
                return "no node here";
            } else if (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
        }
        return currentNode;
    }

    pop() {
        if(this.head === null){
            return "nothing to remove";
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
                return true;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        
        return false;

    }

    find(input) {
        //combine the index one above with the contains one
        //loop through values while updating index. If true, return index of where you found it
        if(this.head.value == null) {
            return false;
        }

        let currentNode = this.head;
        let index = 0;
        //while the next two don't equal null, will stop when the next one is the last one, THEN
        //you can make the next one equal null
        while(currentNode !== null) {
            if (currentNode.value == input) {
                return 'true at ' + index;
            } else {
                currentNode = currentNode.nextNode;
                index++;
            }
        }
        
        return null;
    }

    toString() {
        //while loop through entire thing, adding a string each timne
        let linkedListString = ""; 

        let currentNode = this.head;

        while(currentNode !== null) {
            linkedListString += "( " + currentNode.value + " ) -> ";
            currentNode = currentNode.nextNode;
        }
        linkedListString += "null";
        return linkedListString;
    }

    // insertAt(value, index) {
    //     let currentNode = this.head;

    //     //loop until you get to the index you are adding. Make currentnode.nextnode = next node. make
    //     //one before that equal the current node too. 
    // }

}

//Testing the code

defaultList.prepend("monkey");
defaultList.append("dog");
defaultList.append("rat");
defaultList.append("beagle");
defaultList.append("cat");
console.log(defaultList.at(0));
console.log(defaultList.returnTail());
console.log(defaultList.size());
console.log(defaultList.contains("catt"));
console.log(defaultList.find("dog"));
defaultList.find("dog");
defaultList.find("catboy");
console.log(defaultList.toString());


console.log(defaultList);
