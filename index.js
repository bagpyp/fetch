// define an asynchronous function
async function getData() {
    var url = "https://maps.googleapis.com/maps/api/place/details/json?key="
        + key
        +"&place_id=ChIJC34DLlGYlVQRcdsfrTY-DaY"
    // info that might be unecessary
    const requestInfo = {
        method: 'GET',
        redirect: 'follow',
    };
    // use a CORS proxy hosted at heroku, by simply prepending it's URL to our fetch URL
    // (this is simply to avoid a weird error that preveneted the call)
    url = 'https://cors-anywhere.herokuapp.com/' + url
    // await a response from the placesAPI
    const response = await fetch(url, requestInfo);
    // (a)wait for the response to be resolved into proper JSON
    const data = await response.json()
    // resolved, store target info as another const
    const days = data['result']['opening_hours']['weekday_text']
    console.log(data)
    // initialize UL
    var str = '<ul>'
    // loop to populate UL with LIs
    days.forEach(hours => {
        str += '<li>' + hours + '</li>';
    })
    str += '</ul>'
    // set div where id='hours' to this html str
    document.getElementById('hours').innerHTML = str
}
// call asynchronous function
getData()