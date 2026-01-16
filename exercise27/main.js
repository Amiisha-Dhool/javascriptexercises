
function fechData(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
           const success = true   ;
          if(success){
            resolve({id:1,name:"dhool",city:"jigjiga"})
          }else{
            reject("filled")
          }
        },2000)
    })
}

fechData()
.then((data)=> console.log("fech data",data))
.catch((eror)=> console.log(eror))