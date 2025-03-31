const ENDPOINT_WIKIPEDIA = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function getWikipediaArticle(searchTerm) {
    const response = await fetch(`${ENDPOINT_WIKIPEDIA}/${searchTerm}`);
    const data = await response.json();
    console.log(data);
    return data;
}

getWikipediaArticle("tomato");



// async function dataToHTML(wikiArticle) {
//     const response = await fetch(`${ENDPOINT_WIKIPEDIA}/${wikiArticle}`);
//     const data = await response.json();

//     const wikiDiv = document.createElement('div');
//     wikiDiv.classList.add('data');

//     const wikiHTML = `
//         <h2>${data[source]}</h2>
//     `;

//     console.log(wikiHTML)
// }


// Uncomment these functions when you're ready to test:
//testGetWikipediaArticles(); // Part A
//testDisplayArticles(); // Part B





// Please do not modify the testGetWikipediaArticles() function
async function testGetWikipediaArticles() {
    const western = await getWikipediaArticle("Western Carolina University");
    const unca = await getWikipediaArticle("UNC Asheville");
    const app = await getWikipediaArticle("Appalachian State");
    const charlotte = await getWikipediaArticle("UNC Charlotte");
    console.log(western);
    console.log(unca);
    console.log(app);
    console.log(charlotte);
    return [western, unca, app, charlotte];
}

// Please do not modify the testDisplayArticles() function
async function testDisplayArticles() {
    const container = document.querySelector("#wiki-previews");
    const pages = await testGetWikipediaArticles();
    pages.forEach((page) => {
        container.insertAdjacentHTML("beforeend", dataToHTML(page));
    });
}
