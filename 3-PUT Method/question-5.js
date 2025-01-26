//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */
const newUser = {
    firstName: "Lufy",
    lastName: "monkey. D",
    phoneNumber: "(945) 635-3854",

}

fetch("https://679634cdbedc5d43a6c49088.mockapi.io/users1/1", {
    method: "PUT",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json"
    }

})
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((err)=> console.error(err))

//*To be continue...