import React, { useEffect } from 'react'
import { API } from '../config';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import { setArticles } from '../store/state';
// import { fetchArticles } from '../global'

import HighlightArticle from './uiCard';
import ImgCard from './ImgCard_M';


export default function ApolloHome() {
    const currCountry = useSelector((state) => state.currCountry);
    const currCategory = useSelector((state) => state.currCategory);
    const currKeyword = useSelector((state) => state.currKeyword);
    const articles = useSelector((state) => state.articles);

    // normalize data if needed

    let normalizedData = {
        currCountry,
        currCategory,
        currKeyword
    }

    const dispatch = useDispatch();
    let history = useHistory();

    const buildQueryString = () => {

        // let qs = `${newsUrlTopCountry}${currCountry}&apiKey=${apiKEY}`

        // if (currCategory !== 'none') {
        //   qs += `category=${currCategory}&`;
        // }

        // if (currKeyword !== 'none') {
        //   qs += `q=${currKeyword}&`;
        // }

        // qs += `apiKey=${apiKEY}`;
        // console.log('query string: ', qs)
        // return qs;
    }

    const fetchArticles = () => {
        (async () => {
            // debugger;
            // const qs = buildQueryString();
            const res = await Axios({
                url: `${API}external`,
                method: 'post',
                data: normalizedData
            })
            const { resArticles } = res.data;
            console.log("data:", res.data)
            dispatch(setArticles(resArticles));
            // debugger;
            console.log('articles', articles)
            console.log('curr', currCountry)
            console.log('currC', currCategory)
            console.log('currK', currKeyword)

        })()
    }

    const routeToResults = () => {
        history.push('/showAll')
    }

    useEffect(fetchArticles, []);
    return (
        <div className='home-container'>
            <div className='home-main__left'></div>
            <div className='home-main__center'>
                {(articles && articles.length > 0) ? (
                    <div className='story-container'>
                        <HighlightArticle article={articles[0]} />
                        {(articles.length > 3) ? (
                            <div className='subHighlight-ImgCardPane'>
                                <ImgCard className='subHighlight-ImgCardPane__img' article={articles[1]} />
                                <ImgCard className='subHighlight-ImgCardPane__img' article={articles[2]} />
                                <ImgCard className='subHighlight-ImgCardPane__img' article={articles[3]} />
                            </div>
                        ) : null}
                        <div className='home-browseMore-container'><button onClick={routeToResults} className='home-additional-articles-button'>BROWSE MORE</button></div>
                        {/* Above button should render new container component with list of horizontal
                        highlight cards. Evaluate use case for lazy-loading */}
                    </div>
                ) : (
                        <div className='no-results'>No results for specified search...</div>
                    )
                }
            </div>
        </div>
    )
}

// export class ApolloHome extends Component {
//     constructor(props) {
//         super(props);
//         const currCountry = useSelector((state) => state.currCountry);

//         this.state = {
//             currCountry
//         }
//     }

//     async componentDidMount() {
//         const res = await fetch(`${newsUrlTopCountry}ca&apiKey=${apiKEY}`);
//         const { articles } = await res.json();
//         console.log('articles', articles)
//         console.log('curr', this.currCountry)
//     }

//     render() {
//         return (
//             <div>
//                 Hello, Apollo!
//             </div>
//         )
//     }
// }

// export default ApolloHome
