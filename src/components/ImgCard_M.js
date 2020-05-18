import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { API } from '../config';

const useStyles = makeStyles({
    root: {
        maxWidth: 267,
        transition: '.5s',
        borderBottom: "1px solid gray",
        borderRight: "1px solid gray",
        '&:hover': {
            boxShadow: "7px 7px 5px 0px rgba(50, 50, 50, 0.5)",
            transform: "translate(2px, -8px)"
        }
    },
    typography: {
        fontSize: "14px"
    },
    cardActionArea: {
        maxHeight: "220px"
    }
});

export default function ImgMediaCard({ article }) {
    const classes = useStyles();
    console.log('article:', article)
    const user = useSelector((state) => state.user);

    const body = JSON.stringify({
        url: article.url,
        urlToImg: article.urlToImage,
        title: article.title,
        description: article.description,
        content: article.content,
        upVoteCount: 0,
        downVoteCount: 0
    });
    console.log('body', body);

    const handleSaveClick = async () => {
        if (!user) return <Redirect to='/' />;
        const res = await fetch(`${API}stories/`, {
            method: 'POST',
            body: JSON.stringify({
                url: article.url,
                urlImg: article.urlToImage,
                title: article.title,
                description: article.description,
                content: article.content,
                upVoteCount: 0,
                downVoteCount: 0
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('res', res)
        const { story } = await res.json();
        console.log('story', story);
        const savedRes = await fetch(`${API}stories/saveStory`, {
            method: 'POST',
            body: JSON.stringify({
                userId: user,
                storyId: story[0].id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const { savedStory } = await savedRes.json();
        // if (!res.ok) throw res;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardActionArea} onClick={() => window.open(article.url)}>
                <CardMedia
                    component="img"
                    alt={article.title}
                    height="140"
                    image={article.urlToImage}
                    title={article.title}
                />
                <CardContent >
                    <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
                        {article.title ? `${article.title.slice(0, 90)}...` : null}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {article.description} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleSaveClick} size="small" color="primary">
                    Save
        </Button>
                <Button onClick={() => window.open(article.url)} size="small" color="primary">
                    Full Story
        </Button>
            </CardActions>
        </Card>
    );
}
