var flexContainer = document.getElementsByClassName("flex-container")

//this is the fethcing API
const getUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(_ => _.json());


    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        div.innerHTML = `<strong>User ID:</strong>  <i>${data[i].userId}</i> <br> <strong>ID:</strong> <i>${data[i].id}</i> <br> <b>Title:</b> <i>${data[i].title}</i> <br> <b>Body:</b> <i>${data[i].body}</i>`
        flexContainer[0].appendChild(div)
    }
    console.log(data)
    console.log(flexContainer[0])
}


getUsers();

//this is toggle for on/off active mode this div
const burgerMenu = document.querySelector('.brg-menu-div');
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle('active')
})




