
function traverseTree(tree, cb) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            traverseTree(tree[i], cb);
        }
    } else {
        cb(tree);
    }
    if (tree.subLayers) {
        traverseTree(tree.subLayers, cb);
    }
}


/**
 * returns Array from TreeList
 * @param treeList
 * @param subNodeName
 * @returns {Array}
 */
export function getCheckedLayers(treeList) {
    const result = []
    traverseTree(treeList, item=>{
        if (item.metadata && item.metadata.checked) {
            if (typeof(item.metadata.checked !== "number")) {
                let number = parseInt(item.metadata.checked);
                if (isNaN(number)) { 
                    number = 0;
                }
                item.metadata.checked = number;
            }
            result.push(item);
        }
    })
    return result.sort((item1,item2)=>item1.metadata.checked - item2.metadata.checked);
}
    

