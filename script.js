const names = ['Mal', 'Rich', 'Sonia']

let i = 3

// while (i < 5){
//     console.log('in loop', i)
//     i++
// }

// while(i < names.length){
//     console.log(names[i])
//     i++
// }

// do{
//     console.log("x is ", i)
//     i++
// } while (i < 5)

// if(x = 3){
//     console.log("Success")
// }

// const swear = "fucking"

// // if(swear.length <= 4){
// //     console.log("I am insulted")
// // } 
// // else if(swear.length > 5 && swear.includes("fuck")){
// //     console.log("You have a potty mouth")
// // }
// // else{
// //     console.log("You are shit.")
// // }

// if(swear.length !== "fuck"){
//     console.log("Okayyy")
// }

// function area(radius){
    
//     return 3.14 * radius**2
// }

// const area =  radius =>  3.14 * radius**2



// let newArea = area(5)

// console.log(newArea)

// const greet = ()  => 'hello, world'

// let hell = greet()

// console.log(hell)

// const bill = (products, tax) => {
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax
//     }
//     return total
// }

// const total = bill([10, 15, 30], 2)

// console.log(total)

const ul = document.querySelector('.people')
const people = ['mal', 'dave', 'steve', 'tim']
let html = ``

people.forEach(function(person) {
    html += `<li style = color:'purple> ${person}</li>`
})

ul.innerHTML = html


let user = {
    name: 'Mal',
    age: 30,
    email: 'comdecor@yahoo.com',
    blogs: ['The truth', 'Lies'],
    login: function(){
        console.log("User has logeed in ")
    },
       logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog)
        })
    }
    
}

user.logBlogs()
user.login()