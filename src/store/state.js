// initial state

const initialState = {
    currCountry: 'us',
    currCategory: 'none',
    currKeyword: 'none',
    articles: [],
    drawererIsOpen: false,
    user: null
};

// actions

const SET_CURR_COUNTRY = 'SET_CURR_COUNTRY';
const SET_CURR_CATEGORY = 'SET_CURR_CATEGORY';
const SET_CURR_KEYWORD = 'SET_CURR_KEYWORD';
const SET_ARTICLES = 'SET_ARTICLES';
const SET_DRAWERER = 'SET_DRAWERER';

//auth actions
const SET_USER = 'SET_USER';
const DELETE_USER = 'DELETE_USER';


export const setCurrCountry = (country) => (
    {
        type: SET_CURR_COUNTRY,
        country
    }
);

export const setCurrCategory = (category) => (
    {
        type: SET_CURR_CATEGORY,
        category
    }
);

export const setCurrKeyword = (keyword) => (
    {
        type: SET_CURR_KEYWORD,
        keyword
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

export const setUser = (user) => (
    {
        type: SET_USER,
        user
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
        case SET_CURR_CATEGORY: {
            newState.currCategory = action.category;
            return newState;
        }
        case SET_CURR_KEYWORD: {
            newState.currKeyword = action.keyword;
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
        case SET_USER: {
            newState.user = (action.user && action.user !== 'undefined') ? action.user : null;
            return newState;
        }
        default: return state;
    }
}
