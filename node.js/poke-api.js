const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/pokemon/haunter'

let response = null;
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(url), {
            headers: {
                '':''
            },
        };
    } catch(ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
    };
    if (response) {
        // success
        const json = response.data;
        console.log(json);
        resolve(json);
    };
});