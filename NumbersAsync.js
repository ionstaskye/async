const $favoriteNumber = $("#favoriteNumber")
const $firstList = $('#firstList')
const $secondList = $('#secondList')

const baseAPI = 'http://numbersapi.com/'


async function getFavoriteNumber(){
    let favoriteNumber = await axios.get(`${baseAPI}8`)

    $favoriteNumber.append(`<div>${favoriteNumber.data}</div>`)
}


async function fourNumberFacts(){

    for (i=1; i<5; i++ ){
        let fact = await axios.get(`${baseAPI}${i}`)
        $firstList.append(`<li>${fact.data}</li>`)
    }
}

async function fourFavoriteNumberFacts(){
    for (j=1; j<5; j++ ){
        let fact = await axios.get(`${baseAPI}8`)
        $secondList.append(`<li>${fact.data}</li>`)
    }
}





getFavoriteNumber()
fourNumberFacts()
fourFavoriteNumberFacts()