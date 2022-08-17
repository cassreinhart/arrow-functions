const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = numbers => {
    return numbers.map( num => num ** 2)
    .filter( square => square % 2 === 0);
};

//better way
const squareAndFindEvenss= numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)