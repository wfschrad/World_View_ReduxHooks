const production = process.env.NODE_ENV === "production";

export const newsUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-30&sortBy=publishedAt&apiKey=78bf6a2d1a574d3995099f73fb8f6cd3`
// if (production) {

// } else {
//     export const API = `http://localhost:8080/`
// }
export const API = `http://localhost:8080/`
export const newsUrlBase = `https://newsapi.org/v2/`
export const newsUrlSourceList = `https://newsapi.org/v2/sources`
export const apiKEY = `78bf6a2d1a574d3995099f73fb8f6cd3`
export const newsUrlTopCountry = `https://newsapi.org/v2/top-headlines?country=`
export const newsUrlTopCountryV1 = `https://newsapi.org/v1/articles?country=`


