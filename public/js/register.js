
async function registerUser(){
    let baseUrl= "http://localhost:3000"
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value
    console.log("im new user: " + email)
    //Axios post to register user
    const body = {
        'firstName':firstName,
        'lastName':lastName,
        'email': email
    }
    axios.post(`${baseUrl}/users`, body)
        .then(response => {
            console.log('Response: ', response.data)
        })
        .catch(error => {
            console.log("Error: ", error)
        })
    window.location.href = baseUrl
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    registerUser();
})