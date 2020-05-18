import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                        {`${article.title.slice(0, 90)}...`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {article.description} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Save
        </Button>
                <Button onClick={() => window.open(article.url)} size="small" color="primary">
                    Full Story
        </Button>
            </CardActions>
        </Card>
    );
}
