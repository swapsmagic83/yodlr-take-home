
const userList = document.querySelector("#user-list")

 async function getAllUsers(){
    let baseUrl= "http://localhost:3000"
    let results = await axios.get(`${baseUrl}/users`)
    let allUsers= results.data
    
        for(let i=0; i< allUsers.length; i++){
            let userLi = document.createElement('li')
            let firstName= allUsers[i].firstName
            let lastName=allUsers[i].lastName
            let email=allUsers[i].email
            let state = allUsers[i].state
            userLi.innerText= "First Name: "+ firstName + ', '
                            +"Last Name: "+lastName + ', '
                            +"Email: "+ email + ', '
                            +"State: "+ state
            userList.append(userLi)
        }   
    
}
getAllUsers()

