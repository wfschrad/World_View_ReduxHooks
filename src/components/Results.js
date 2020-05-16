import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import HighlightArticle from './uiCard';

const Results = () => {
    let history = useHistory();
    const articles = useSelector((state) => state.articles);
    console.log('articles in results', articles)
    if (articles.length === 0) history.push('/');
    return (
        <div className='results-container'>
            <div className='results-container__left'></div>
            <div className='results-container__main'>
                {articles.map((article, idx) => (
                    <HighlightArticle key={idx} article={article} />
                ))}

            </div>
        </div>
    )
}

export default Results;
