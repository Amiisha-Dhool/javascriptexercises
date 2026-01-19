


//fatch data from feck api

async function fechUserData(){
    console.log("soo dabac saxip")
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    console.log("response:",data)
}

fechUserData()



// fech data from my file json

async function fechData(){
    console.log("fech data")
    const response = await fetch('./data.json')
    const data = await response.json()

    console.log ("response:",data)
}

fechData()
