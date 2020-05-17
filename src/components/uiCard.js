
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {`${article.title.slice(0, 75)}...`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {article.content ? article.content.slice(0, 260) :
                            article.description ? article.description.slice(0, 260) : <span>Read Article</span>}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={article.urlToImage}
                title="Live from space album cover"
            />
        </Card>
    );
}