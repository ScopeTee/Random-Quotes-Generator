
document.querySelector('button').onclick = showQuote
function showQuote() {
fetch("https://favqs.com/api/qotd")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.quote.tags)
        document.getElementById('placeText').innerText = data.quote.body
        document.getElementById("author").innerText = '~' + data.quote.author
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}