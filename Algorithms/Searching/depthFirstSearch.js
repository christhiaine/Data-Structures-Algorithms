// We will use our BST implementation and add a DFS method in it for this.
// There are three ways to implement this i.e: inorder, preorder, postorder
// See the three types of implementing DFS results below under the type of tree



//The type of tree we want to make here...

//          9
//    4           20
//  1   6      15    170
// InOrder - [1, 4, 6, 9, 15, 20, 170]
//PreOrder - [9, 4, 1, 6, 20, 15, 170]
//PostOrder - [1, 6, 4, 15, 170, 20, 9]




class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value) {
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if ( value > currentNode.value ) {
                currentNode = currentNode.right;
            } else if( value === currentNode.value ) {
                return currentNode;
            }
        }
        return false;
    }

    //this is a very complex/advance implementation. Not neccesary for the purposes of this practice or solving intervies but does not hurt
    //to know how it is implemeneted/works
    
    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
      //we're using recursion as its simple to do so
    DFSInorder() {
        return traverseInOrder(this.root, []); //This will be our recursive function
    }

    DFSPreorder() {
        return traversePreOrder(this.root, []); //This will be our recursive function
    }

    DFSIPostorder() {
        return traversePostOrder(this.root, []); //This will be our recursive function
    }


}


function traverseInOrder(node, list) {
    if(node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, list)
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if(node.left) {
        traversePreOrder(node.left, list)
    }
    if(node.right) {
        traversePreOrder(node.right, list)
    }
    return list;
}

function traversePostOrder(node, list) {
    if(node.left) {
        traversePostOrder(node.left, list)
    }
    if(node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value);
    return list;
}



const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(9);
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSIPostorder());

// JSON.stringify(traverse(tree.root));

function traverse(node){
    const tree = { value: node.value };
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right === null ? null:
    traverse(node.right);
    return tree;
}