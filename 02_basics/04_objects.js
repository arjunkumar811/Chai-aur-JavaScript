// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123123asd"
tinderUser.name = "Arjun"
tinderUser.isLoggedIn = false

console.log(tinderUser);  // { id: '123123asd', name: 'Arjun', isLoggedIn: false }


const regularUser = {
    email: "arjun@gmail.com",
    fullname: {
        username: {
            firstName: "Arjun",
            lastName: "Kumar"
        }
    }
}

console.log(regularUser.fullname.username.lastName); // Kumar



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1, ...obj2}
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const users = [
    {
        id: 1,
        email: "kumar@gmail.com"
    },
    {
        id: 2,
        email: "arjun@gmail.com"
    },
    {
        id: 3,
        email: "ar@gmail.com",
    }
]

let match = users[1].email
console.log(match);  // arjun@gmail.com

console.log(Object.keys(tinderUser)); // [ 'id', '123123asd' ]
console.log(Object.values(tinderUser)); // [ 'name', 'Arjun' ]
console.log(Object.entries(tinderUser)); // [ 'isLoggedIn', 'false']

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]