

function fechData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     const succes = true
     if(succes){
        resolve({id:1,name:"amiish dhool 🙌"})
     }else{
        reject("waa qalad saxip naga raali noqo😒")
     }
    },2000)
    })
}


async function keendatada(){
   try {
     const user = await fechData()
    console.log(user)
   } catch (error) {
    console.log(error)
   }
}

keendatada()