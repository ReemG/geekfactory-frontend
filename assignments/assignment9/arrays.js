exports.sum = function (arr) {
    var summation = 0;
    for (var i = 0; i < arr.length; i++)
    { summation += arr[i]; }
    return summation;
}
exports.odds = function (arr) {
    var arrres = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arrres.push(arr[i]);
        }
    }
    return arrres;
}
function val(v) {
    return v === 50;
}
exports.find = function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (val(arr[i]))
        { return arr[i]; }
    }
}