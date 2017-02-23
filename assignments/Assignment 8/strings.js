exports.lengthOfLastWord = function (str) {
    var arr = [];
    arr = str.split(' ');
    //arr = arr.map(String);
    var i = arr.length;
    if (str.length === 0)
    { return 0; }
    else {
        while (isNaN(arr[i - 1]) == false) {
            i = i - 1;
        }
        return arr[i - 1].length;
    }
}
