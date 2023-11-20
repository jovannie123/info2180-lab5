window.addEventListener('load', (event) =>{

    const lookcountry = document.getElementById("countryLookup")
    const lookupCity = document.querySelector("#cityLookup")
    const inputv = document.querySelector("#country")
    const resulti = document.querySelector("#result")


    lookcountry.addEventListener("click", (e) => {
        e.preventDefault()

        let userInput = inputv.value
        userInput.trim()

        let url = `world.php?country=${userInput}&lookup=country`

        fetch(url)
        .then(response => {
            if(response.ok){return response.text()}
            else{return Promise.reject('Something was wrong with fetch request!')}
        })
        .then(data => {
            resulti.innerHTML = data
        })
        .catch(error => console.log(`ERROR HAS OCCURRED: ${error}`))
    })

    lookupCity.addEventListener("click", (e) => {
        e.preventDefault()

        let userInput = inputv.value;
        userInput.trim()

        let url = `world.php?country=${userInput}&lookup=city`

        fetch(url)
        .then(response => {
            if(response.ok){return response.text()}
            else{return Promise.reject('Something was wrong with fetch request!')}
        })
        .then(data => {
            resulti.innerHTML = data
        })
        .catch(error => console.log(`ERROR HAS OCCURRED: ${error}`))
    })
})