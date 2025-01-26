// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */

users.forEach(user => {
    fetch("https://679634cdbedc5d43a6c49088.mockapi.io/users1",{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    
    } )
    .then((response)=>response.json())
    .then((data)=> console.log(data))
    .catch((er)=> console.error(er))
})

 
//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
const form = document.querySelector("form")
const phoneInput = document.createElement("input")
phoneInput.setAttribute("id", "phoneNumber")
phoneInput.setAttribute("type", "text")
const phoneLabel = document.createElement("label")
phoneLabel.setAttribute("for", "phoneNumber")
phoneLabel.textContent = "phone number"
const button = form.querySelector("button")
button.setAttribute("type", "submit")
form.insertBefore(phoneLabel, button)
form.insertBefore(phoneInput, button)

// form.append(phoneLabel,phoneInput)

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstName = document.querySelector("#fName").value
    const lastName= document.querySelector("#lName").value
    const phoneNumber = document.querySelector("#phoneNumber").value
    const user1 = {
        firstName,
        lastName,
        phoneNumber
    }
    fetch("https://679634cdbedc5d43a6c49088.mockapi.io/users1", {
        method: "POST",
        body: JSON.stringify(user1),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("new user added", data);
    })
    .catch((err) => {
        console.error("error:", err);
    });
    
})
