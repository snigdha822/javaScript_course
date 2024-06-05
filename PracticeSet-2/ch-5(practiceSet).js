// add numbers to the array 
// let arr = [10,20,30,40]
// let a = prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)


// add numbers until 0 is added
// let arr = [10,20,30,40]
// let a;
// do{
//  a = prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// } while (a != 0);
//   console.log(arr)


// filter for nums dividible by 10 from a  given array
// let arr1 = [10,3,5,89,20,30,40]
// let n = arr1.filter((x)=>{
//     return x%10 == 0
// })
// console.log(n)


//squre of given nums
// let arr2 = [10,3,5,89,20,30,40]
// let n = arr2.map((x)=>{
//     return x*x
// })
// console.log(n)


// factorial of nums
let arr3 = [1,2,3,4,5]
let n = arr3.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)