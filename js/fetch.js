FAKE_API='https://reqres.in/api/users'

//Get users
//step 1
const getUsers = async () => {
   const res =  await fetch(FAKE_API)
   const users = await res.json()
   return users;
}

const logUsers = async () => {
    const users = await getUsers();
    console.log(users)
}
    
logUsers();
//Create User


