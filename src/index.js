module.exports = function towelSort (matrix) {
    if(matrix === undefined || matrix.length === 0){return [];}
    else{return matrix.flatMap((x, i) => i % 2 !== 0 ? x.reverse() : x);}
}
