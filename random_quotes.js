let quotes=[
    {
        quote:'Together we can change the world, just one random act of kindness at a time.',
        author:'Ron Hall'

    },
    {
        quote:'Goals transform a random walk into a chase.',
        author:'Mihaly Csikszent'
    },
    {
        quote:'I believe life is an intelligent thing: that things aren\'t random. ',
        author:'Steve Jobs'
    },
    {
        quote:'We can all fight against loneliness by engaging in random acts of kindness. ',
        author:'Gail Honeyman'
    },
    {
        quote:'I take random inspiration from everywhere',
        author:'Edward Enninful'
    },
    {
        quote:'Only I can change my life. No one can do it for me.',
        author:'Carol Burnett'
    },
    {
        quote:'7 is my lucky number!',
        author:'Sonny TheJackpot'
    }
];

let randomInterval=null;

function generateRandomQuote(){
    if(randomInterval!=null){
        //clearInterval(randomInterval);
    }
    //We want to generate a number between 0 and number of quotes or len
    let randomNum=Math.floor(quotes.length*Math.random());
    //let theQuote=quotes[randomNum].quote;
    //let author=quotes[randomNum].author;
    document.getElementById('quote').innerText=quotes[randomNum].quote;
    document.getElementById('author').innerText=quotes[randomNum].author;
}

function playRandomQuote(){
    randomInterval=setInterval(
        function(){
            generateRandomQuote();
        },
        3000
    )
}