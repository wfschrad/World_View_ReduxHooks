import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import translate from 'translate';

// import HighlightArticle from './ImgCardHorizontal_M';
// import HighlightArticle from './HighlightArticle';
// import HighlightArticle from './HighlightArticle2_M';
import HighlightArticle from './uiCard';

import ImgCard from './ImgCard_M';
import { loadArticles } from '../global';
import { setArticles } from '../store/state';
import { newsUrlTopCountry, apiKEY } from '../config';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKEY);



const Home = () => {
    // const articles = localStorage.getItem('world-view-articles');
    // const { loadArticles, setArticles, currCountry } = useContext(UserContext);
    // let { articles } = useContext(UserContext);
    const currCountry = useSelector((state) => state.currCountry);
    const articles = useSelector((state) => state.articles);
    const user = useSelector((state) => state.user);
    let history = useHistory();
    const dispatch = useDispatch();

    const routeToResults = () => {
        history.push('/showAll')
    }

    useEffect(() => {
        (async () => {
            const storedArticles = localStorage.getItem(`worldViewArticles-layoutDev-${currCountry}`);
            // const timeStamp = localStorage.get
            if (storedArticles && storedArticles !== 'undefined') {
                console.log('stored in...', storedArticles);
                const parsedArticles = JSON.parse(storedArticles);
                dispatch(setArticles(parsedArticles));
            } else {
                let response;
                try {
                    console.log('before home fetch')
                    response = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=78bf6a2d1a574d3995099f73fb8f6cd3`);
                    // newsapi.v2.topHeadlines({
                    //     q: 'bitcoin',
                    //     category: 'business',
                    //     language: 'en',
                    //     country: 'us'
                    //   }).then(response => {
                    //     console.log(response);
                    //     /*
                    //       {
                    //         status: "ok",
                    //         articles: [...]
                    //       }
                    //     */
                    //   });
                    console.log('after home fetch')
                    if (response.ok) {
                        const { articles } = await response.json();
                        // if (currCountry !== 'us') {
                        //     const testArticle = await translate(articles[0].title, 'en');
                        //     console.log('test article', testArticle)
                        // }
                        console.log('articles 64', articles)
                        dispatch(setArticles(articles));
                        localStorage.setItem(`worldViewArticles-layoutDev-${currCountry}`, JSON.stringify(articles));
                    }
                } catch (e) {
                    console.log('res in catch:', response)
                    console.error(e.message);
                }
            }
        })();
    }, []);
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

export default Home;
