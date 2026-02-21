// const addPostBtn = document.querySelector("#addPost")
// const containerPost = document.querySelector("#posts")

// document.addEventListener("DOMContentLoaded", loadPosts)

// addPostBtn.addEventListener("click", addPost)


// function addPost() {
//   const title = document.querySelector("#title").value
//   const image = document.querySelector("#image").value
//   const content = document.querySelector("#content").value

//   if (title === "" || content === "") {
//     alert("Title iyo content waa qasab")
//     return
//   }

//   // object post ah
//   const post = {
//     id: Date.now(),
//     title,
//     image,
//     content
//   }

  
//   const posts = getPosts()
//   posts.push(post)
//   localStorage.setItem("posts", JSON.stringify(posts))

  
//   createPost(post)

//   document.querySelector("#title").value = ""
//   document.querySelector("#image").value = ""
//   document.querySelector("#content").value = ""
// }

// function loadPosts() {
//   const posts = getPosts()
//   posts.forEach(post => createPost(post))
// }

// function createPost(post) {
//   const moh = document.createElement("div")
//   moh.classList.add("post")
//   moh.dataset.id = post.id //

//   moh.innerHTML = `
//     <h1>${post.title}</h1>
//     ${post.image ? `<img src="${post.image}">` : ""}   
//     <p>${post.content}</p>

//     <div class="container">
//       <button onclick="updatebuton(this)">update</button>
//       <button onclick="deletebuton(this)">delete</button>
//     </div>
//   `

//   containerPost.appendChild(div)
// }

// // //delete
// // function deletebuton(btn) {
// //   const postDiv = btn.closest(".post")
// //   const id = postDiv.dataset.id

// //   let posts = getPosts()
// //   posts = posts.filter(post => post.id != id)
// //   localStorage.setItem("posts", JSON.stringify(posts))

// //   postDiv.remove()
// // }

// // //  UPDATE 
// // function updatebuton(btn) {
// //   const postDiv = btn.closest(".post")
// //   const id = postDiv.dataset.id

// //   let posts = getPosts()
// //   const post = posts.find(p => p.id == id)

// //   const newTitle = prompt("Update title:", post.title)
// //   const newImage = prompt("Update image URL (empty = remove):", post.image)
// //   const newContent = prompt("Update content:", post.content)

// //   if (newTitle !== null && newTitle !== "") post.title = newTitle
// //   if (newContent !== null && newContent !== "") post.content = newContent

// //   if (newImage !== null) {
// //     post.image = newImage
// //   }

// //   localStorage.setItem("posts", JSON.stringify(posts))

// //   // DOM 
// //   postDiv.querySelector("h1").textContent = post.title
// //   postDiv.querySelector("p").textContent = post.content

// //   const img = postDiv.querySelector("img")
// //   if (post.image) {
// //     if (img) {
// //       img.src = post.image
// //     } else {
// //       const newImg = document.createElement("img")
// //       newImg.src = post.image
// //       postDiv.querySelector("h1").after(newImg)
// //     }
// //   } else {
// //     if (img) img.remove()
// //   }
// // }
// //  //  GET POSTS 
// function getPosts() {
//   return localStorage.getItem("posts")
//     ? JSON.parse(localStorage.getItem("posts"))    
//     : []
// }
 


const addPostBtn = document.querySelector("#addPost")
const containerPost = document.querySelector("#posts")

addPostBtn.addEventListener("click", addPost)

function addPost() {
  const title = document.querySelector("#title").value
  const image = document.querySelector("#image").value
  const content = document.querySelector("#content").value
  
  if (title === "" || content === "") {
    alert("Title iyo content waa qasab")
    return
  }

  const post = {
    id: Date.now(),
    title,
    image,
    content
  }

  createPost(post)

  // nadiifi input-yada
  document.querySelector("#title").value = ""
  document.querySelector("#image").value = ""
  document.querySelector("#content").value = ""
}

function createPost(post) {
  const div = document.createElement("div")
  div.classList.add("post")

  div.innerHTML = `
    <h1>${post.title}</h1>
    ${post.image ? `<img src="${post.image}" alt="post image">` : ""}
    <p>${post.content}</p>
  `

  containerPost.appendChild(div)
}
