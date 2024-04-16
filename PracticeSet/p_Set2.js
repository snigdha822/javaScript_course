// 1.
let numbers = [203,504,204,20,549,204,142,100];
numbers.sort(function compare(a,b){
    return b-a;
});

// numbers.sort(compare);
// console.log(numbers);


// 2.
// function pushAndPop(array,value){
//     array.push(value);
//     return array.pop();
// }

// let myArray = [1,2,3,4];
// let newValue = 5;
// let poppedValue = pushAndPop(myArray,newValue);
// console.log("Popped element:",poppedValue);
// console.log("Modified Array:",myArray);


//3.
let library = [];
  

// Built a function to add a new book in the library
const Addbook = (Title,Author,PublicationYear)=>{
    let book = {
        title: Title,
        author: Author,
        publicationYear: PublicationYear
    }
    library.push(book);
}


console.log(library);

//Built a function to remove a book by title
const removeBook = (Title)=>{
    library = library.filter(book => book.title !== Title);
}

//Built a function to find a book by author name
const findBOOkbyAuthor = (Author)=>{
    library = library.filter(book => book.author === Author);
}



Addbook("1984","Goerge Orwell",1949)
Addbook("To Kill a Mockingbird","Harper Lee",1960)
Addbook("Think Like a Monk ","Jay Shetty",2021)

console.log(library);

removeBook("1984");

console.log("After removing 1984",library);

findBOOkbyAuthor("Jay Shetty");
console.log("Jay Shetty's books are: ",library);