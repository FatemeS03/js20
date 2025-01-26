//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
function deleteFamily(){
    fetch("https://679634cdbedc5d43a6c49088.mockapi.io/users1")
    .then((response)=> response.json())
    .then(users => {
     const family= users.filter((user)=> user.id > 13)
     family.forEach((user) => {
        fetch(`https://679634cdbedc5d43a6c49088.mockapi.io/users1/${user.id}`, {
            method: "DELETE",
            headers:{
                "Content-Type" :"application/json"
            }

        })
        .then(response => {
            if (response.ok){
                console.log(`user (${user.id}) deleted`)
            }else{
                console.error("faild")
            }
                
            
        })
        .catch((er)=> console.log(er))
        
     });
    })
    .catch((err)=> {
        console.log(`erorrrrr ${err}`)
    })
}
// deleteFamily()

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


function evenId(){
    fetch("https://679634cdbedc5d43a6c49088.mockapi.io/users1")
    .then((response)=> response.json())
    .then(items=> {
        const evenUser= items.filter((item)=> item.id %2 === 0)
        evenUser.forEach( i=> {
            fetch(`https://679634cdbedc5d43a6c49088.mockapi.io/users1/${i.id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type" :"application/json"
                }
            })
            .then((response)=> {
                if (response.ok){
                    console.log(`yes user (${i.id}) deleted`)
                }else{
                    console.error("faild")
                }
            })
            .catch((er)=> console.error(er))
        })

    })
    .catch((err)=> {
        console.log(`erorrrrr ${err}`)
    })
}
evenId()

//*End of story :)

