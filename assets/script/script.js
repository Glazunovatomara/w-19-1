let titleInput = document.getElementById('title')
let textInput = document.getElementById('text')

let btn = document.getElementById('btn')

const section = document.querySelector('.post')

btn.addEventListener("click", () => {
    if(titleInput.value === '' || textInput.value === '') {
        return
    }

fetch('https://jsonplaceholder.typicode.com/posts ', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: `${titleInput.value}`,
        body: `${textInput.value}`
    })
})
.then((response) => {
    return response.json()
})
.then((data) => {
    let div = document.createElement('div')
    div.innerHTML = `<h2 class="subtitle">${data.title}</h2><p class="post-body">${data.body}</p>`
    section.append(div)

    titleInput.value = ''
    textInput.value = ''

})
.catch((error) => console.log(`Ошибка: ${error}`))
})

