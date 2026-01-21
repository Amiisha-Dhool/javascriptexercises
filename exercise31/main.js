

async function  fechUserData(){
   try {
     console.log("fech data")
     
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok){
        throw new Error(`filled ${response.status}`)
    }
        const data = await response.json()
        console.log(data)
    
   } catch (error) {
    console.log("error")
   }
}
 
   
   fechUserData()