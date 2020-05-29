import { newsUrlTopCountry, newsUrlTopCountryV1, apiKEY, newsUrlBase } from "./config";
import { useSelector, useDispatch } from 'react-redux';

import { setArticles } from './store/state';

// const currCountry = useSelector((state) => state.currCountry);
// const currCategory = useSelector((state) => state.currCategory);
// const currKeyword = useSelector((state) => state.currKeyword);


// const dispatch = useDispatch();

export const newsCategories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
]

export const newsCountries = {
    Argentina: 'ar',
    Australia: 'au',
    Austria: 'at',
    Belgium: 'be',
    Brazil: 'br',
    Bulgaria: 'bg',
    Canada: 'ca',
    China: 'cn',
    Colombia: 'co',
    Cuba: 'cu',
    "Czech Republic": 'cz',
    Egypt: 'eg',
    France: 'fr',
    Germany: 'de',
    Greece: 'gr',
    "Hong Kong": 'hk',
    Hungary: 'hu',
    India: 'in',
    Indonesia: 'id',
    Ireland: 'ie',
    Israel: 'il',
    Italy: 'it',
    Japan: 'jp',
    Latvia: 'lv',
    Lithuania: 'lt',
    Malaysia: 'my',
    Mexico: 'mx',
    Morocco: 'ma',
    Netherlands: 'nl',
    "New Zealand": 'nz',
    Nigeria: 'ng',
    Norway: 'no',
    Philippines: 'ph',
    Poland: 'pl',
    Portugal: 'pt',
    Romania: 'ro',
    Russia: 'ru',
    "Saudi Arabia": 'sa',
    Serbia: 'rs',
    Singapore: 'sg',
    Slovakia: 'sk',
    Slovenia: 'si',
    "South Africa": 'za',
    "South Korea": 'kr',
    Sweden: 'se',
    Switzerland: 'ch',
    Taiwan: 'tw',
    Thailand: 'th',
    Turkey: 'tr',
    UAE: 'ae',
    Ukraine: 'ua',
    "United Kingdowm": 'gb',
    "United States": 'us',
    Venuzuela: 've'
}

export const engCountries = {
    Australia: 'au',
    Canada: 'ca',
    Ireland: 'ie',
    "New Zealand": 'nz',
    Philippines: 'ph',
    "South Africa": 'za',
    "United Kingdowm": 'gb',
    "United States": 'us',
}

// const buildQueryString = () => {

//     let qs = `${newsUrlTopCountry}${currCountry}&apiKey=${apiKEY}`

//     // if (currCategory !== 'none') {
//     //   qs += `category=${currCategory}&`;
//     // }

//     // if (currKeyword !== 'none') {
//     //   qs += `q=${currKeyword}&`;
//     // }

//     // qs += `apiKey=${apiKEY}`;
//     // console.log('query string: ', qs)
//     return qs;
// }

// export const fetchArticles = () => {
//     (async () => {
//         debugger;
//         const qs = buildQueryString();
//         const res = await fetch(qs);
//         const { articles } = await res.json();
//         dispatch(setArticles(articles));
//         debugger;
//         console.log('articles', articles)
//         console.log('curr', currCountry)
//         console.log('currC', currCategory)
//         console.log('currK', currKeyword)

//     })()
// }



// const login = (token) => {
//     window.localStorage.setItem("state-worldViewElite-token", token);
//     setAuthToken(token);
//     setNeedLogin(false);
// };

// export const loadArticles = async () => {
//     try {
//         const response = await fetch(`${newsUrlTopCountry}${currCountry}&apiKey=${apiKEY}`);
//         // const response = await newsapi.v2.topHeadlines({
//         //     language: 'en',
//         //     country: currCountry
//         // });
//         console.log('language en')
//         if (response.ok) {
//             const { articles } = await response.json();
//             dispatch(setArticles(articles));
//             return articles;
//         }
//     } catch(e) { console.log(e); }
// };
// const getArticles = async() => {
//     const storedArticles = localStorage.getItem(`worldViewArticles-layoutDev-${currCountry}`);
//     console.log('stored', storedArticles);
//     if (storedArticles !== 'undefined') {
//         articles = JSON.parse(storedArticles);
//         setArticles(articles)
//     } else {
//         console.log('fetching');
//         const fetchedArticles = await loadArticles();
//         localStorage.setItem(`worldViewArticles-layoutDev-${currCountry}`, JSON.stringify(fetchedArticles));
//         articles = fetchedArticles
//         setArticles(articles);
//         return articles;
//     }
// };
