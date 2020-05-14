import React, { useContext } from 'react';

const HighlightArticle = ({ article }) => {
    return (
        <div className='highlight-article' onClick={() => window.open(article.url)}>
            <div className='highlight-article__content'>
                <div className='highlight-article__content__title'>
                    {`${article.title.slice(0,75)}...`}
                </div>
                <div className='highlight-article__content__description'>
                    {article.content ? article.content.slice(0,260) :
                    article.description? article.description.slice(0,260):<span>Read Article</span>}
                </div>
            </div>
            <img className='highlight-article__img'src={article.urlToImage} alt={article.title}/>
        </div>
    )
}

export default HighlightArticle;
