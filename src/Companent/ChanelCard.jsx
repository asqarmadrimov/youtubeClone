import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const ChanelCard = ({ video, marginTop }) => {

  return (
    <Box sx={{alignItems: 'center',justifyContent: 'center', display: 'flex', width: '310px', height: '330px', marginX: 'auto', borderRadius: '8px', paddingTop: '10px' }}>
      <Link to={`/chanel/${video?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', marginBottom: {marginTop}, flexDirection: 'column', justifyContent: 'center', textAligen: 'center' }}>
          <CardMedia sx={{ height: '225px', width: '225px', borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto' }} image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.channelTitle} title="green iguana" />

          <Typography variant="h5" fontWeight='bold' textAlign={'center'} mt='10px' sx={{ color: 'black' }}>
            {video?.snippet?.title}
            <CheckCircle sx={{fontSize: '18px', color: 'gray'}}/>
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography sx={{fontSize: '15px', color: 'gray', marginX: 'auto' }}>
              {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChanelCard