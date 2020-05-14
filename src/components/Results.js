import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import HighlightArticle from './HighlightArticle';

const Results = () => {
    const articles = useSelector((state) => state.articles);
    console.log('articles in results', articles)

    return (
        <div className='results-container'>
            <div className='results-container__left'></div>
            <div className='results-container__main'>
                {articles.map((article, idx) => (
                    <HighlightArticle key={idx} article={article}/>
                ))}

            </div>
        </div>
    )
}

export default Results;
