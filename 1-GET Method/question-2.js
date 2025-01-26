/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
async function dataGet() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
if (response.status === 404){
    throw "user not found"
}else if (!response.ok){
    throw "response wasn't ok"
}
        const data = await response.json()
console.log(data)

    } catch(e){
console.log(e)
    }
}
dataGet()