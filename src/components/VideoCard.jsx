import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoChannelTitle, demoProfilePicture, demoVideoUrl, demoVideoTitle, demoChannelUrl } from '../util/constants';


const VideoCard = ({ video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {xs: '100%', sm: '358px', md: '310px'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                /*The ?. operator is like the . chaining operator, except that instead of causing an error 
                if a reference is nullish (null or undefined), the expression short-circuits with a return 
                value of undefined. When used with function calls, it returns undefined if the given function 
                does not exist.*/
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width: {
                    xs: '100%', sm: '358px', md: '320px'
                }, height: 180}}    
                />
        </Link>
        <CardContent sx={{backgroundColor: '#0F0F0F', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}></CheckCircle>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard