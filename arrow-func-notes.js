const add = (x, y) => {
    return x + y;
};

[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => Math.max(max, currNum));

[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
    return ffMath.max(max, currNum);
});

//shortcuts below

//for one parameter, leave out parens
[1, 2, 3, 4, 5].forEach( n => {
    console.log(n * 10);
});

//w/o parameters
const greet = () => {
    console.log('HELLO');
};

//w/ implicit return(oneline)
[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0); //[2, 4, 6]

const double = n => n * 2;

[1, 5, 7, 9, 10, 12, 13, 15].map( n => {
    if (n % 2 === 0) {
        return 'even';
    }
    return 'odd';
}); //["odd", "odd", "odd", "odd", "even", "even", "odd", "odd"]
//rewrite w/ternary operator
[1, 5, 7, 9, 10, 12, 13, 15].map( n => (n % 2 === 0 ? 'even' : 'odd'));

const dailyRainTotals = [
    [1.2, 0.35, 2.2], 
    [1.7, 0.6, 0.1], 
    [2.5, 0.9, 1.5]
]; //return arr of sum of each subarr
//use reduce to reduce each subarr to sum, use map to call reduce on each arr and give new end arr
dailyRainTotals.map((hourlyRainTotal) => {
    return hourlyRainTotal.reduce((sum, inchesOfRain) => {
        return sum + inchesOfRain;
    });
}); //[3.75, 2.4, 4.9]
//rewrite using implicit return: remove curly braces, returns and semicolon w/in cb
dailyRainTotals.map(hourlyRainTotal => 
    hourlyRainTotal.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);//this is still a single expression even though not oneline
//you don't have to use the return keyword if there is only one expression in the body of the fn

//implicitly returning an object
//if you want to return an object from arrow fn, w/ return
const makeMath = num => {
    return {
        square: num * num, 
        double: num * 2
    };
};

//you need to put the object in parens!
const implicitReturnMakeMath = num => ({
    square: num * num, 
    double: num * 2
}); //thinks it's a function if no parens

const cat = {
    name: 'Ludwig',
    meow: function(){
        return `${this.name} says MEOW!!!`; //this refers to the object itself here
    }
};//Ludwig says MEOW!!!
//doesn't work w/arrow fn, returns " says MEOW!!!"
//w/ arrow fn, this refers to the window/global object

