const $draw = $('#draw')
const $drawArea = $('#drawArea')

baseAPI = 'https://deckofcardsapi.com/api/'
let deckID = null

$draw.on('click', cardDraw)
async function drawCard(){

    let deck = await axios.get (`${baseAPI}deck/new/shuffle/?deck_count=1`)
    let deckID = deck.data.deck_id

    
    let draw = await axios.get(`${baseAPI}deck/${deckID}/draw`)
    let card = draw.data.cards
    return (`${card[0].value} of ${card[0].suit}`)
}

async function drawTwoCards(){

    let deck = await axios.get (`${baseAPI}deck/new/shuffle/?deck_count=1`)
    let deckID = deck.data.deck_id

    let draw = await axios.get(`${baseAPI}deck/${deckID}/draw`)
    let firstCard = draw.data.cards

    let secondDraw = await axios.get(`${baseAPI}deck/${deckID}/draw`)
    let secondCard = secondDraw.data.cards
    console.log(`${firstCard[0].value} of ${firstCard[0].suit}`)
    console.log(`${secondCard[0].value} of ${secondCard[0].suit}`)
}




async function cardDraw(){
    if (deckID === null){
        let deck = await axios.get (`${baseAPI}deck/new/shuffle/?deck_count=1`)
        
        deckID = deck.data.deck_id

}
    
    let draw = await axios.get(`${baseAPI}deck/${deckID}/draw`)
    let card = draw.data.cards
    $drawArea.append(`<li>${card[0].value} of ${card[0].suit}</li>`)
}







