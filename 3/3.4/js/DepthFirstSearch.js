var tree = {
    root : 8,
        left: {
            NodeValue: 3,
            left:{
                NodeValue : 2
            },
            right: {
                NodeValue : 4
            }
        },
        right: {
            NodeValue : 10,
            left: null,
            right:{
                NodeValue: 14,
                left: {
                    NodeValue: 11
                },
                right:{
                    NodeValue: 20
                }
            }
        }
};
var treeRoot = tree.root;
var leftChild = tree.left.NodeValue;
var rightChild = tree.right.NodeValue;


var DFS = function () {

    searchNodeValue = function (node, key) {
        if (node.key === null){
            return null;
        }

        var NodeKey = parseInt(node.key);

        if (key < NodeKey){
            return searchNodeValue(node.leftChild, key);
        } else if (key < NodeKey){
            return searchNodeValue(node.rightChildht, key);
        } else {
            return node.NodeValue;
        }

    };

    searchTree = function(key) {

        var keyNode = parseInt(key);

        if (isNaN(keyNode)){
            return undefined;
        } else {
            return searchNodeValue(root, keyNode);
        }
    };
};

console.log('Tree root :',treeRoot);
console.log('Left child :',leftChild);
console.log('Right child :',rightChild);

console.log(tree);