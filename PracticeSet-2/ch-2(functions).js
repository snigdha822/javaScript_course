function addTwoNum(x,y) {
    // return 1 + (x+y)/2; 
    return Math.round (1 + (x+y)/2); 
}

// Arrow function , we should have prefer this one
const greeding = () =>{
    console.log ("Hello")
    return 'Hi'
}

let a = 3;
let b = 4;
let c = 5;

let v = greeding();
console.log (v)
console.log ("The avarage of a & b is: ", addTwoNum(a,b) )
console.log ("The avarage of b & c is: ", addTwoNum(b,c))
console.log ("The avarage of a & c is: ", addTwoNum(a,c))