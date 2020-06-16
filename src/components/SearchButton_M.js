import React from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';

import { API } from '../config';
import { setArticles } from '../store/state';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  const currCountry = useSelector((state) => state.currCountry);
  const currCategory = useSelector((state) => state.currCategory);
  const currKeyword = useSelector((state) => state.currKeyword);
  const articles = useSelector((state) => state.articles);

  const dispatch = useDispatch();

  let history = useHistory();


  // const buildQueryString = () => {
  //   // const currCountry = useSelector((state) => state.currCountry);
  //   // const currCategory = useSelector((state) => state.currCategory);
  //   // const currKeyword = useSelector((state) => state.currKeyword);

  //   //top-headlines

  //   let qs = `${newsUrlBase}top-headlines?country=${currCountry}&`;

  //   if (currCategory !== 'none') {
  //     qs += `category=${currCategory}&`;
  //   }

  //   if (currKeyword !== 'none') {
  //     qs += `q=${currKeyword}&`;
  //   }

  //   qs += `apiKey=${apiKEY}`;
  //   console.log('query string: ', qs)
  //   return qs;
  // }

  const handleSearch = async () => {
    console.log('search button clicked')
    console.log('In search button component')
    // if (storedArticles && storedArticles !== 'undefined') {
    //   console.log('stored in...', storedArticles);
    //   const parsedArticles = JSON.parse(storedArticles);
    //   dispatch(setArticles(parsedArticles));
    //   history.push('/');
    // } else {
    try {
      (async () => {
        // debugger;
        // const qs = buildQueryString();
        const res = await Axios({
            url: `${API}external`,
            method: 'post',
            data: {
                currCountry,
                currCategory,
                currKeyword
            }
        })
        const { resArticles } = res.data;
        console.log("data:", res.data)
        dispatch(setArticles(resArticles));
        debugger;
        console.log('articles', articles)
        console.log('curr', currCountry)
        console.log('currC', currCategory)
        console.log('currK', currKeyword)

    })()


      // const qs = buildQueryString();
      // console.log('qs', qs)
      // // const storedArticles = localStorage.getItem(`worldViewArticles-${qs}`);
      // // if (storedArticles && storedArticles !== 'undefined') dispatch(setArticles(storedArticles));
      // // else {
      // const response = await fetch(qs);
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
      // if (response.ok) {
      //   const { articles } = await response.json();
        // if (currCountry !== 'us') {
        //     const testArticle = await translate(articles[0].title, 'en');
        //     console.log('test article', testArticle)
        // }
        // console.log('articles 64', articles)
        debugger
        // dispatch(setArticles(articles));
        // localStorage.setItem(`worldViewArticles-${qs}`, JSON.stringify(articles));
        // history.push('/');
      //}
     // else { throw Error('Error fetching') }
      // }
    } catch (e) { console.log(e); }
    // }
  }

  return (
    <div>
      <Button
        onClick={handleSearch}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SearchIcon>search</SearchIcon>}
      >
        Browse
      </Button>
    </div>
  )
}
