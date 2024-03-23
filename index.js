const axios = require('axios');

async function fetchRandomAustralianAddress() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your AddressFinder API key
  const endpoint = 'https://api.addressfinder.io/api/au/address/autocomplete';

  try {
    const response = await axios.get(endpoint, {
      params: {
        key: apiKey,
        q: 'random', // You can adjust the query parameter based on your requirements
      },
    });

    // Extract random address from the response
    const randomAddress = response.data.addresses[Math.floor(Math.random() * response.data.addresses.length)];
    
    return {
      street: randomAddress.line_1,
      suburb: randomAddress.locality_name,
      postcode: randomAddress.postcode,
      state: 'NSW', // Assuming all addresses are in New South Wales for simplicity
      country: 'Australia',
    };
  } catch (error) {
    console.error('Error fetching address:', error.response ? error.response.data : error.message);
    return null;
  }
}

module.exports = fetchRandomAustralianAddress;
