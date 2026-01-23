

function changeImage(){
    const image = document.querySelector('#image')


    const url = prompt("sawirka soo gali")
    image.setAttribute('src',url)

     const style = prompt('widithka gali huno')
    image.style.width = '400px'

      const hight = prompt('soo gali hight')
     image.style.hight = '200px'

     const border = prompt('soo gali border')
    image.style.border = '2px solid blue'

      const borderradios = prompt('soo gali borderradios')
    image.style.borderRadios = '15'

      const pading = prompt('soo gali pading')
    image.style.padding = '15px'

}