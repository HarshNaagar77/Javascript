const url = 'https://randomuser.me/api/'
fetch(url)
.then((response) => {
    const res = response.json()      // parse(convert) the api data from json to object of javascript
    return res
})
.then( (response2) => {
    console.log(response2)
    console.log(response2.results[0].name)

})
.catch( (error) => {
    console.log('Error:', error);
})
