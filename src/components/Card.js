import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import {Button, CardActionArea, CardActions} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import noImage from '../assets/noImage.jpg';

function ArticleCard({oneCard}) {
    const navigation = useNavigate();

    const handlePageCardClick = () => {
        navigation(`/page/${oneCard.title}`);
    }

    return (
        <Card sx={{maxWidth: 340, minWidth: 340}} onClick={handlePageCardClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={(oneCard.thumbnail) ? (oneCard.thumbnail.url) : noImage}
                    alt={oneCard.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {oneCard ? oneCard.title : <p>Brak</p>}
                    </Typography>
                    <Typography component="div" variant="body2" color="text.secondary">
                        {oneCard ? oneCard.description : <h1>Brak</h1>}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read article
                </Button>
            </CardActions>
        </Card>
    );
}

export default ArticleCard;

