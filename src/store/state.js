// initial state

const initialState = {
    currCountry: 'us',
    articles: [],
    drawererIsOpen: false
};

// actions

const SET_CURR_COUNTRY = 'SET_CURR_COUNTRY';
const SET_ARTICLES = 'SET_ARTICLES';
const SET_DRAWERER = 'SET_DRAWERER';

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

export const setDrawerer = (isOpen) => (
    {
        type: SET_DRAWERER,
        isOpen
    }
)

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
        case SET_DRAWERER: {
            newState.drawererIsOpen = action.isOpen;
            return newState;
        }
        default: return state;
    }
}
