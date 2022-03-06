const aplicacion = document.querySelector('.container')
const geturl = new URLSearchParams(window.location.search)
id = geturl.get('id')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
  const name = document.createElement('p')
  name.innerHTML = data.name
  const username = document.createElement('p')
  username.innerHTML = data.username
  const email = document.createElement('p')
  email.innerHTML = data.email
  aplicacion.appendChild(name)
  aplicacion.appendChild(username)
  aplicacion.appendChild(email)
})
.catch(err => console.log(err))