window.addEventListener("load", (event) =>{

    const countryLookup = document.querySelector("#countryLookup")
    const lookupCity = document.querySelector("#cityLookup")
    const input = document.querySelector("#country")
    const result = document.querySelector("#result")


    countryLookup.addEventListener("click", (e) =>{
        e.preventDefault()

        let newInput = input.value
        newInput.trim()

        let url = 'world.php?country=${newInput}&lookup=country'

        fetch(url)
        .then(response => {
            if(response.ok){
                return response.text()
            }
            else{
                return Promise.reject('Something went wrong when fetching!!!!')
            }
        })
        .then(data =>{
            alert(data)
            result.innerHTML = data
        })

        .catch(error => console.log('WE HAVE AN ERROR!!!! ${error}'))
    })

    lookupCity.addEventListener("click", (e) =>{
        e.preventDefault()
        let newInput = input.value
        newInput.trim()
        let url = 'world.php?city=${newInput}&lookup=city'

        fetch(url)
        .then(response => {
            if(response.ok){
                return response.text()
            }
            else{
                return Promise.reject('Something went wrong when fetching!!!!')
            }
        })
        .then(data =>{
            alert(data)
            result.innerHTML = data
        })

        .catch(error => console.log('WE HAVE AN ERROR!!!! ${error}'))
    })
})