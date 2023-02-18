
/**fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      **/ 
     /**this is a program to run the api in a termina to test.. */
// But how to fetch file directly from api to js without console
const userCardTemplate = document.querySelector("[data-user-template]");
const userDetailsTemplate = document.querySelector("[user-Details-template]");
const userSearchInput = document.querySelector("[data-search-input]");


let users = []
userSearchInput.addEventListener("input", e=>{
    const value = e.target.value.toLowerCase()
    //we convert toLowercase to prevent case sensitivity in a statement
    users.forEach(user =>{
        const isVisible = user.name.includes(value).toLowerCase() ||
        user.email.includes(value).toLowerCase()
        user.element.classList.toggle("hide", isVisible)
    })
    //every time you search a value using a letter it will show the value
    //with a common letter as the one you have searched for
})

fetch('https://jsonplaceholder.typicode/users')
   .then(res => res.json())
   .then(data => {
    users = data.map(user => {
        const card = userCardTemplate.textContent.cloneNode(true).children[0]
        const head = card.querySelector("[data-head]")
        const  body = card.querySelector("[data-body]")
        
        head.textContent = user.name
        body.textContent = user.email

        userDetailsTemplate.append(card)

        return{name:user.name, email:user.email, element:card}
    })
    /**
     * this was before we open a new function users that contains an empty array
     *     data.forEach(user => {
        const card = userCardTemplate.textContent.cloneNode(true).children[0]
        const head = card.querySelector("[data-head]")
        const  body = card.querySelector("[data-body]")
        
        head.textContent = user.name
        body.textContent = user.email

        userDetailsTemplate.append(card)
    });

    **/

   })