// initial state

const initialState = {
    currCountry: 'us',
    articles: []
};

// actions

const SET_CURR_COUNTRY = 'SET_CURR_COUNTRY';
const SET_ARTICLES = 'SET_ARTICLES';

export const setCurrCountry = (country) => (
    {
        type: SET_CURR_COUNTRY,
        country
    }
);

export const setArticles = (articles) => (
    {
        type: SET_ARTICLES,
        articles
    }
);

//reducer

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_CURR_COUNTRY: {
            newState.currCountry = action.country;
            return newState;
        }
        case SET_ARTICLES: {
            newState.articles = action.articles;
            return newState;
        }
        default: return state;
    }
}
