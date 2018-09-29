let result = 0;
module.exports = function getZerosCount(number) {
    recur(number);
    let copyResult = result;
    result = 0;
    return copyResult;
};

function recur(number) {
    if (number < 5) {
        return 'end';
    }
    else {
        result += Math.floor(number / 5);
        recur(Math.floor(number / 5));
    }
}
