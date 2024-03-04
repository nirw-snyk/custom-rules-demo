//Rewrite in javascript using axios
//java script using axios

const axios = require('axios'); // Include Axios if not already done

const url = 'http://example.com/api/data';

// GET request
axios.get(url)
    .then(response => {
        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error(`Request failed with status code ${response.status}`);
        }
    })
    .catch(error => {
        console.error('GET Error:', error.message);
    });

// POST request
axios.post(url)
    .then(response => {
        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error(`Request failed with status code ${response.status}`);
        }
    })
    .catch(error => {
        console.error('POST Error:', error.message);
    });

// PUT request
axios.put(url)
    .then(response => {
        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error(`Request failed with status code ${response.status}`);
        }
    })
    .catch(error => {
        console.error('PUT Error:', error.message);
    });

// HEAD request
axios.head(url)
    .then(response => {
        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.error(`Request failed with status code ${response.status}`);
        }
    })
    .catch(error => {
        console.error('PUT Error:', error.message);
    });
