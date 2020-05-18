import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HighlightArticle from './uiCard';
import HighlightArticleSaved from './HighlightArticleSaved';
import { API } from '../config';


const SavedStories = () => {
    const user = useSelector((state) => state.user);
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const savedStories = await fetch(`${API}stories/savedStories/${user}`)
                const { stories } = await savedStories.json();
                setSavedArticles(stories);
                console.log('stories 19', stories)
            } catch (e) { debugger; console.log(e); }
        })();
    }, []);

    console.log('user savedStories', user);
    if (!user) return <Redirect to='/' />

    return (
        <>
            <h1 className='saved-heading'>--- Saved Stories---</h1>
            {(savedArticles && savedArticles.length > 0) ? (
                <div className='saved-container'>
                    <div className='saved-container__left'></div>
                    <div className='saved-container__main'>
                        {savedArticles.map((article, idx) => (
                            <HighlightArticleSaved key={idx} article={article} />
                        ))}
                    </div>
                </div>
            ) : <div>No data</div>}
        </>
    );
}

export default SavedStories;