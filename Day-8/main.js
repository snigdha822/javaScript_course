const data = `{
    "name": "Piya",
    "age": 19,
    "isStudent": true,
    "email": "msnigdha328@gmail.com",
    "city": "Kolkata",
    "data1": ["Hello",30,{
        "name": "Piya",
        "age": 19
    }],
    "data2":{
        "name":"Priyanka",
        "age":20
    }
}`

let parseData = JSON.parse(data);

//console.log(parseData);

// Wanted to print the name of the data variables in json
console.log(parseData.data1);
console.log(parseData.age);