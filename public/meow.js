async function meow() {
    const response = await fetch("http://localhost:8080/recipes")
    const data = await response.json()
    console.log(data)
    let section = document.querySelector(".meow")

    for(let i=0;i<data.length;i++) {
        let meowDiv = document.createElement("div")
        let name = document.createElement("p")
        let image = document.createElement("img")

        name.innerHTML = data[i].name
        image.src=data[i].image
        image.classList.add("mikrh")
        section.appendChild(meowDiv)
        meowDiv.appendChild(name)
        meowDiv.appendChild(image)
    }
    // let section = document.querySelector(".meow")
    // let meowDiv = document.createElement("div")
    // let simpleP = document.createElement("p")
    // let priceP = document.createElement("p")

    // simpleP.innerHTML = "meow1"
    // priceP.innerHTML = "price1"
    // section.appendChild(meowDiv)
    // meowDiv.appendChild(simpleP)
    // meowDiv.appendChild(priceP)
}