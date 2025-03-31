// 1. Create your getBusinesses function here:

const rootURL = 'https://www.apitutor.org/yelp/simple/v3/businesses/search';

async function getBusinesses(location,search_term, num_results){
    const response = await fetch(`${rootURL}?location=${encodeURIComponent(location)}&term=${encodeURIComponent(search_term)}&limit=${num_results}`);
    const data = await response.json();
    console.log(data);
    return data;
}





// 2. When you're done, uncomment the test code below and preview index.html in your browser:


console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);

