const myobj = {
    name: "Sergey",
    age: 47,
    email: "sergey47@gmail.com",
    cars: {
        car1: "BMW",
        car2: "mercedes benze",
        car3: "Rolls Royce"
    }
}

const string_fy = JSON.stringify(myobj);

console.log(string_fy);