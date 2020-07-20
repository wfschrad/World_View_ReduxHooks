
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import { API } from '../config';

const defaultImagePath = './logo2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        maxWidth: '840px',
        maxHeight: '220px',
        marginBottom: '20px',
        boxSizing: 'border-box',
        // border: "1px solid gray",
        borderBottom: "1px solid gray",
        borderRight: "1px solid gray",
        transition: '.5s',
        '&:hover': {
            boxShadow: "7px 7px 5px 0px rgba(50, 50, 50, 0.5)",
            transform: "translate(2px, -8px)"
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 700,
        // padding: '20px'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard({ article }) {
    const classes = useStyles();
    const theme = useTheme();
    const user = useSelector((state) => state.user);
    const history = useHistory();

    const handleSaveClick = async (ev) => {
        ev.stopPropagation();
        if (!user) history.push('/login');

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
        window.alert('Story Saved!')
        // if (!res.ok) throw res;
    }
    // debugger
    return article && (
        <Card className={classes.root} >
            <div onClick={() => window.open(article.url)} className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {article.title ? `${article.title.slice(0, 75)}...` : null}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {article.content ? article.content.slice(0, 260) :
                            article.description ? article.description.slice(0, 260) : <span>Read Article</span>}
                        <span className='uiButtons'>
                            <Button onClick={handleSaveClick} size="small" color="primary">
                                Save
        </Button>
                            <Button onClick={() => window.open(article.url)} size="small" color="primary">
                                Full Story
        </Button>
                        </span>
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={article.urlToImage ? article.urlToImage : defaultImagePath}
                title={article.title}
            />
        </Card>
    );
}
