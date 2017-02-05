exports.saveForLater = function (value) {
    return function () {
        return value;
    }
}
exports.executeLater = function (execute) {
    return function () {
        return execute();
    }
}