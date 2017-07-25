let tree = {
    "root": {
    }
};

function loadJSON(callback) {
    var treeObj = new XMLHttpRequest();
    treeObj.overrideMimeType("js");
    treeObj.open('GET', 'js/tree.json', true);
    treeObj.onreadystatechange = function () {
        if (treeObj.readyState == 4 && tree.status =="200"){
            callback(treeObj.responseText);
        }
    };
    treeObj.send(null);
}

function readTree() {
    loadJSON(function (response) {
        var actual_JSON = JSON.parse(response);
    });

}

function DFS(start) {

}