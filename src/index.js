// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (arguments.length === 0) {
        return [];
    }
    let newArray = [];
    let arrayPosition = matrix.length - matrix.length;
    for (let i = 0; i < matrix.length; i++) {
        if (arrayPosition % 2 != 0) {
            newArray.push(matrix[i].reverse());
            arrayPosition += 1;
        } else {
            newArray.push(matrix[i]);
            arrayPosition += 1;
        }
    }
    let result = newArray.flat();
    return result;
};
