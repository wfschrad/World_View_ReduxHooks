import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import HighlightArticle from './HighlightArticle';
import ImgCard from './ImgCard_M';

import { loadArticles } from '../global';
import { setArticles } from '../store/state';
import { newsUrlTopCountry, apiKEY } from '../config';



const Home = () => {
    // const articles = localStorage.getItem('world-view-articles');
    // const { loadArticles, setArticles, currCountry } = useContext(UserContext);
    // let { articles } = useContext(UserContext);
    const currCountry = useSelector((state) => state.currCountry);
    const articles = useSelector((state) => state.articles);
    let history = useHistory();
    const dispatch = useDispatch();

    const routeToResults = () => {
        history.push('/showAll')
    }

    useEffect(() => {
        (async () => {
            const storedArticles = localStorage.getItem(`worldViewArticles-layoutDev-${currCountry}`);
            if (storedArticles && storedArticles !== 'undefined') {
                console.log('stored in...', storedArticles);
                const parsedArticles = JSON.parse(storedArticles);
                dispatch(setArticles(parsedArticles));
            }else {
                try {
                            const response = await fetch(`${newsUrlTopCountry}${currCountry}&apiKey=${apiKEY}`);
                            // const response = await newsapi.v2.topHeadlines({
                            //     language: 'en',
                            //     country: currCountry
                            // });
                            console.log('language en')
                            if (response.ok) {
                                const { articles } = await response.json();
                                dispatch(setArticles(articles));
                                localStorage.setItem(`worldViewArticles-layoutDev-${currCountry}`, articles);                            }
                        } catch(e) { console.log(e); }
            }
        })();
            if (articles) console.log('articles in Home', articles);
    }, [currCountry]);
    return (
        <div className='home-container'>
            <div className='home-main__left'></div>
            <div className='home-main__center'>
                { (articles && articles.length > 0) ? (
                    <div className='story-container'>
                        <HighlightArticle article={articles[0]}/>
                        <div className='subHighlight-ImgCardPane'>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[2]}/>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[3]}/>
                            <ImgCard className='subHighlight-ImgCardPane__img' article={articles[4]}/>
                        </div>
                        <button onClick={routeToResults} className='home-additional-articles-button'>BROWSE MORE</button>
                        {/* Above button should render new container component with list of horizontal
                        highlight cards. Evaluate use case for lazy-loading */}
                    </div>
                    ) : (
                    <div>OH SNAP!</div>
                    )
                }
            </div>
        </div>
    )
}

export default Home;
