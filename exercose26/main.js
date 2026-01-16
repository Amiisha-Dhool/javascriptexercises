

//blocking

function getMassage(){
    alert("alambida aqbal")
    return{id:1, Name:"amiish",city:"jigjiga"}
}

console.log("massageka itus")

 const user = getMassage()

 console.log("fech massage",user)

 console.log("masoo bixi kartid ilaa ka hore la helo iska joog saxip😂")




// nonblocking
function massage(callbac){
    setTimeout(()=>{
        const user = {id:2,name:"dhool"}
        callbac(user)
    },2000)
}

console.log("keen massageka",)

massage(function(user){
    console.log(user)
})

console.log("kuma xidhnid ka hore iska soo muqo saxip")