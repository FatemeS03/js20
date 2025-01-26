/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");
article.style.display="flex"
article.style.flexWrap="wrap"
article.style.justifyContent= "center"
article.style.alignItems="center"
article.style.gap="40px"


// ! Answer
async function makeData() {
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok){
            throw "response was not ok!"
        }
        const data = await response.json() 
         console.log(data)
         data.forEach(element => {
            console.log(element)
            const card = document.createElement("div")
            card.style.margin = "60px"
            card.style.border="10px solid grey "
            card.style.width= "250px"
            card.style.height= "170px"
            card.style.padding= "10px"
            card.style.textAlign= "center"
           
            const h2 = document.createElement("h2")
            h2.textContent =  element.name
            h2.style.marginTop= "50px"
            const h3 = document.createElement("h3")
            h3.textContent = `◾ Company's Name : ${element.company.name}`
            h3.style.fontSize= "10px"
            card.append(h2, h3)
article.append(card)
         });

        
    }catch(e){
        console.error( e)
    }
    
}
makeData()