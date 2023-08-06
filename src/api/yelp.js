import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer BUpfcSNM7qIMcBlmfPBxPmtPzDmk8NayubMwch1NL4RJlk90a3V2VQGgM9ZWCIwgzbTqT7RIX4WMScnauy0UDYWVOUXsIc1TPeMpaLc0yBX15eC70LV7iizGrqrIZHYx'
    }
});

