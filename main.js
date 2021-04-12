const submit = document.querySelector('button');
const pic = document.querySelector('img');

submit.addEventListener('click', function(){
    // console.log('I was clicked')
    const URL = 'https://dog.ceo/api/breeds/image/random';
    
    fetch(URL)
    
    .then(function(rawResponse){
        console.log(rawResponse);
        return rawResponse.json();
        
    })
    .then(function (json) {
        pic.src = json.message
        console.log(json);
    })
    .catch((error) => console.log(error))
})

// ============================================================
const citySub = document.querySelector('#city-button');
const loc = document.querySelector('[type = "text"]');

citySub.addEventListener('click', function(){
    // console.log('i was clicked hard')
    // console.log(loc.value)
    const city = loc.value;
    const WURL = `https://goweather.herokuapp.com/weather/${city}`;
    // console.log(city)
    fetch(WURL)
    
    .then(function (rawResponse) {
        return rawResponse.json();
    })

    .then(function(json){
        const t1 = document.querySelector('#temp1');
        const t2 = document.querySelector('#temp2');
        const t3 = document.querySelector('#temp3');

        t1.innerHTML = json.forecast[0].temperature;
        t2.innerHTML = json.forecast[1].temperature;
        t3.innerHTML = json.forecast[2].temperature;

        const w1 = document.querySelector('#wind1');
        const w2 = document.querySelector('#wind2');
        const w3 = document.querySelector('#wind3');

        w1.innerHTML = json.forecast[0].wind;
        w2.innerHTML = json.forecast[1].wind;
        w3.innerHTML = json.forecast[2].wind;

        const d1 = document.querySelector('#desc1');
        const d2 = document.querySelector('#desc2');
        const d3 = document.querySelector('#desc3');

        d1.innerHTML = json.description;
        d2.innerText = "Cloudy with a chance of rain.";
        d3.innerText = "A 50% Chance of Heavy ThunderStorms!"

        

        // console.log(json)
    })
})
// =======================================================================

const randoJoke = document.querySelector('#random-joke');

randoJoke.addEventListener('click', function(){
    const CNJ = 'http://api.icndb.com/jokes/random';
    // console.log('rando joke button clicked')
    fetch(CNJ)

    .then(function(rawResponse){
        return rawResponse.json();
    })

    .then(function(json){
        // console.log(json.value);
        const rJoke = document.querySelector('#rando-joke');

        rJoke.innerHTML = json.value.joke;
    })
})

// // poke api
// const pm = document.querySelector('.search-button');
// const pmName = document.querySelector('[type = "text"]');

// pm.addEventListener('click', function(){
//     console.log('clicked')
//     console.log(pmName.value)
//     const name = pmName.value;
//     const pmdb = `https://pokeapi.co/api/v2/pokemon/${name}`
    
//     fetch(pmdb)

//     .then(function(rawResponse){
//         return rawResponse.json();
//     })

//     .then(function(json){
//         console.log(json);
//     })
// })

