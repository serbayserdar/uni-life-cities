const container = document.querySelector('.container')

fetch('https://unilife-server.herokuapp.com/cities')
.then(res=>res.json())
.then(data=>{
    const allCities = data.response.map(item=>{
        return `<div class="card">
        <img src="${item.image_url}">
        <div class="info">
          <p id="name">Name: <span>${item.name}</span></p>
          <p id="universities">Universities: <span>${item.universities}</span></p>
          <p id="student-life">Student Life: <span>${item.student_life}</span></p>
        </div>  
        </div>`
    })
    container.innerHTML = allCities.join('')
})
.catch(error=>{
    console.log(error)
})