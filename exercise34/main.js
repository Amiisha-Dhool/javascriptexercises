


const list = document.querySelector('#list')


function addItem(){
    //create
 const addItem  = document.createElement('li')

// add text

addItem.textContent = "obect 3"

//append
    list.append(addItem)

}




//remove

function removeItem(){

    if(list.lastChild){
 list.removeChild(list.lastChild)

    }else{
        alert("maxad delit garayn wuu dhamadaye eng hhh🤣🤣🤣")
    }

   
}